package ss.bond.Web3Samples.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.model.Pool;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tx.gas.ContractGasProvider;
import org.web3j.tx.gas.DefaultGasProvider;
import org.web3j.tx.gas.StaticGasProvider;

import java.io.IOException;
import java.math.BigInteger;
import java.util.List;


@Service
public class PoolService {

    BigInteger gasLimit = BigInteger.valueOf(507770);//See: README.md Получение эстимейта (gasLimit)
    BigInteger gasPrice = DefaultGasProvider.GAS_PRICE;

    private Logger logger = LoggerFactory.getLogger(PoolService.class);

    private final Web3j web3j;
    private final Credentials masterCredentials;
    private final EthEventService eventService;
    private final LoadContractService loadContractService;

    public PoolService(Web3j web3j, Credentials masterCredentials,
                       EthEventService eventService, LoadContractService loadContractService) {
        this.web3j = web3j;
        this.masterCredentials = masterCredentials;
        this.eventService = eventService;
        this.loadContractService = loadContractService;
    }

    public String deployContract(String subject, BigInteger proposalCount) throws Exception {
        ContractGasProvider gasProvider = new StaticGasProvider(gasPrice, gasLimit);
        Pool deployedContract = Pool.deploy(web3j, masterCredentials, gasProvider, proposalCount, subject).send();
        return deployedContract.getContractAddress();
    }

    public String getPool(String contractAddress) throws Exception {
       return loadContractWithMasterCredentials(contractAddress).getPool().send();
    }

    public List<Pool.VotedEventResponse> vote(BigInteger choice,
                                              String privateKey,
                                              String contractAddress) throws Exception {
        Credentials userCredentials = Credentials.create(privateKey);

        eventService.subscribeToEvents(contractAddress, userCredentials);

        Pool pool = loadContractService.loadContract(contractAddress, userCredentials);
        TransactionReceipt receipt = pool.vote(choice).send();
        logger.info("TransactionReceipt[vote] contractAddress={} receipt={}", contractAddress, receipt);
        return Pool.getVotedEvents(receipt);
    }

    public BigInteger getResult(String contractAddress) throws Exception {
        return loadContractWithMasterCredentials(contractAddress).getResult().send();
    }

    private Pool loadContractWithMasterCredentials(String contractAddress) throws IOException {
        return loadContractService.loadContract(contractAddress, masterCredentials);
    }
}
