package ss.bond.Web3Samples.service;

import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.model.Pool;
import org.web3j.protocol.Web3j;
import org.web3j.tx.gas.ContractGasProvider;
import org.web3j.tx.gas.DefaultGasProvider;
import org.web3j.tx.gas.StaticGasProvider;

import java.math.BigInteger;


@Service
public class PoolService {

    private final Web3j web3j;

    public PoolService(Web3j web3j) {
        this.web3j = web3j;
    }

    public String deployContract() throws Exception {
        BigInteger gasLimit = BigInteger.valueOf(357038);//generated value in truffle (console) by CMD: Pool.new.estimateGas();
        BigInteger gasPrice = DefaultGasProvider.GAS_PRICE;
        String signerPrivateKey = "0ab77efb866fac8835d0a11e6b1462005654e6ffd3c320e75df46f6362cb3a10";
        Credentials credentials = Credentials.create(signerPrivateKey);
        ContractGasProvider gasProvider = new StaticGasProvider(gasPrice, gasLimit);
        Pool deployedContract = Pool.deploy(web3j, credentials, gasProvider).send();
        return deployedContract.getContractAddress();
    }
}
