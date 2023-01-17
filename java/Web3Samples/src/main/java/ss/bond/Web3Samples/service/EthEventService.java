package ss.bond.Web3Samples.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.request.EthFilter;

import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class EthEventService {
    private Logger logger = LoggerFactory.getLogger(PoolService.class);

    private ConcurrentHashMap<String, EthFilter> filterStore = new ConcurrentHashMap<>();

    private final Web3j web3j;

    public EthEventService(Web3j web3j) {
        this.web3j = web3j;
    }

    public void subscribeToEvents(String contractAddress) {
        if (Objects.isNull(filterStore.get(contractAddress))) {
            filterStore.put(contractAddress, subscribe(contractAddress));
        }
    }

    private EthFilter subscribe(String contractAddress) {
        EthFilter filter = new EthFilter(
                DefaultBlockParameterName.LATEST,
                DefaultBlockParameterName.LATEST,
                contractAddress
        );

        // subscribe to events
        web3j.ethLogFlowable(filter).subscribe(
                event -> logger.info("Event received: {}", event),
                error -> logger.error("Error: ", error)
        );

        return filter;
    }
}
