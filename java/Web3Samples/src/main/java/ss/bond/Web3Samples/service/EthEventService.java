package ss.bond.Web3Samples.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.model.Pool;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.tx.gas.DefaultGasProvider;

import java.io.IOException;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class EthEventService {
    private Logger logger = LoggerFactory.getLogger(PoolService.class);

    private ConcurrentHashMap<String, EthFilter> filterStore = new ConcurrentHashMap<>();

    private final Web3j web3j;

    private final LoadContractService loadContractService;

    public EthEventService(Web3j web3j, LoadContractService loadContractService) {
        this.web3j = web3j;
        this.loadContractService = loadContractService;
    }

    public void subscribeToEvents(String contractAddress, Credentials credentials) throws IOException {
        if (Objects.isNull(filterStore.get(contractAddress))) {
            EthFilter filter = new EthFilter(
                    DefaultBlockParameterName.LATEST,
                    DefaultBlockParameterName.LATEST,
                    contractAddress
            );

            //logEncoded(filter);
            logDecoded(filter, contractAddress, credentials);

            filterStore.put(contractAddress, filter);
        }
    }

    private void logEncoded(EthFilter filter) {
        // subscribe to events
        web3j.ethLogFlowable(filter).subscribe(
                event -> logger.info("Event received (encoded): {}", event),
                error -> logger.error("Error: ", error)
        );
    }

    private EthFilter logDecoded(EthFilter filter,
                                 String contractAddress,
                                 Credentials credentials) throws IOException {
        Pool pool = loadContractService.loadContract(contractAddress, credentials, DefaultGasProvider.GAS_LIMIT);

        // subscribe to events
        pool.votedEventFlowable(filter).subscribe(
                event -> logger.info("Event received (decoded): voter={} value={}", event._voter, event._value)
        );

        return filter;
    }
}
