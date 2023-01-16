package ss.bond.Web3Samples.service;

import org.springframework.stereotype.Service;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthAccounts;
import org.web3j.protocol.core.methods.response.EthBlockNumber;
import org.web3j.protocol.core.methods.response.EthGetBalance;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;

import java.io.File;
import java.io.IOException;
import java.security.InvalidAlgorithmParameterException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.util.concurrent.ExecutionException;

@Service
public class GeneralService {

    private static final String KEY_STORE_PASSWORD = "password123";
    private static final String KEY_STORE_PATH = "D:\\dev\\block-chain-playground\\java\\Web3Samples\\target";

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

    public EthGetBalance getEthBalance(String address) throws ExecutionException, InterruptedException {
        return web3j.ethGetBalance(address, DefaultBlockParameter.valueOf("latest")).sendAsync().get();
    }

    public String generateWallet() throws InvalidAlgorithmParameterException, CipherException, IOException, NoSuchAlgorithmException, NoSuchProviderException {
        return WalletUtils.generateNewWalletFile(KEY_STORE_PASSWORD, new File(KEY_STORE_PATH), true);
    }
}
