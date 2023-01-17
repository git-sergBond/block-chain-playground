package ss.bond.Web3Samples.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.model.Pool;
import org.web3j.protocol.Web3j;
import org.web3j.tx.gas.ContractGasProvider;
import org.web3j.tx.gas.DefaultGasProvider;
import org.web3j.tx.gas.StaticGasProvider;

import java.io.IOException;
import java.math.BigInteger;

@Service
public class LoadContractService {

    BigInteger gasLimit = BigInteger.valueOf(357038);//generated value in truffle (console) by CMD: Pool.new.estimateGas();
    BigInteger gasPrice = DefaultGasProvider.GAS_PRICE;

    private Logger logger = LoggerFactory.getLogger(PoolService.class);

    private final Web3j web3j;

    public LoadContractService(Web3j web3j) {
        this.web3j = web3j;
    }

    public Pool loadContract(String contractAddress, Credentials credentials) throws IOException {
        ContractGasProvider gasProvider = new StaticGasProvider(gasPrice, gasLimit);
        Pool pool = Pool.load(contractAddress, web3j, credentials, gasProvider);
        logger.info("loadContract - contractAddress={} isValid={}", contractAddress, pool.isValid());
        return pool;
    }
}
