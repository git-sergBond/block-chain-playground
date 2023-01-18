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

    BigInteger gasLimit = BigInteger.valueOf(357038);//generated value in truffle (console) by CMD: Pool.new.estimateGas();
    BigInteger gasPrice = DefaultGasProvider.GAS_PRICE;

    private Logger logger = LoggerFactory.getLogger(PoolService.class);

    private final Web3j web3j;
    private final EthEventService eventService;
    private final LoadContractService loadContractService;

    public PoolService(Web3j web3j, EthEventService eventService, LoadContractService loadContractService) {
        this.web3j = web3j;
        this.eventService = eventService;
        this.loadContractService = loadContractService;
    }

    public String deployContract() throws Exception {
        ContractGasProvider gasProvider = new StaticGasProvider(gasPrice, gasLimit);
        Pool deployedContract = Pool.deploy(web3j, getMasterCredentials(), gasProvider).send();
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
        return loadContractService.loadContract(contractAddress, getMasterCredentials());
    }

    private Credentials getMasterCredentials() {
        String signerPrivateKey = "0ab77efb866fac8835d0a11e6b1462005654e6ffd3c320e75df46f6362cb3a10";
        return Credentials.create(signerPrivateKey);
    }
}
