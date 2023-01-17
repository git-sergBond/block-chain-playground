package ss.bond.Web3Samples.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.model.Pool;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.Log;
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

    private final Web3j web3j;

    private Logger logger = LoggerFactory.getLogger(PoolService.class);

    public PoolService(Web3j web3j) {
        this.web3j = web3j;
    }

    public String deployContract() throws Exception {
        ContractGasProvider gasProvider = new StaticGasProvider(gasPrice, gasLimit);
        Pool deployedContract = Pool.deploy(web3j, getMasterCredentials(), gasProvider).send();
        return deployedContract.getContractAddress();
    }

    public String getPool(String contractAddress) throws Exception {
       return loadContract(contractAddress, getMasterCredentials()).getPool().send();
    }

    public List<Log> vote(BigInteger choice, String privateKey, String contractAddress) throws Exception {
        Credentials userCredentials = Credentials.create(privateKey);

        TransactionReceipt receipt = loadContract(contractAddress, userCredentials).vote(choice).send();

        return receipt.getLogs();
    }

    private Credentials getMasterCredentials() {
        String signerPrivateKey = "0ab77efb866fac8835d0a11e6b1462005654e6ffd3c320e75df46f6362cb3a10";
        return Credentials.create(signerPrivateKey);
    }

    private Pool loadContract(String contractAddress, Credentials credentials) throws IOException {
        ContractGasProvider gasProvider = new StaticGasProvider(gasPrice, gasLimit);
        Pool pool = Pool.load(contractAddress, web3j, credentials, gasProvider);
        logger.info("loadContract - contractAddress={} isValid={}", contractAddress, pool.isValid());
        return pool;
    }
}
