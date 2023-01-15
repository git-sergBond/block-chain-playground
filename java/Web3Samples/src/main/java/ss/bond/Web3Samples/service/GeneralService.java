package ss.bond.Web3Samples.service;

import org.springframework.stereotype.Service;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthAccounts;
import org.web3j.protocol.core.methods.response.EthBlockNumber;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;

import java.util.concurrent.ExecutionException;

@Service
public class GeneralService {

    private final Web3j web3j;

    public GeneralService(Web3j web3j) {
        this.web3j = web3j;
    }

    public EthBlockNumber getBlockNumber() throws ExecutionException, InterruptedException {
        return web3j.ethBlockNumber().sendAsync().get();
    }

    public EthAccounts getEthAccounts() throws ExecutionException, InterruptedException {
        return web3j.ethAccounts().sendAsync().get();
    }

    public EthGetTransactionCount getTransactionCount(String address) throws ExecutionException, InterruptedException {
        return web3j.ethGetTransactionCount(address, DefaultBlockParameter.valueOf("latest")).sendAsync().get();
    }
}
