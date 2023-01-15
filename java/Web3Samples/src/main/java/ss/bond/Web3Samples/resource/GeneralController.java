package ss.bond.Web3Samples.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.web3j.protocol.core.methods.response.EthAccounts;
import org.web3j.protocol.core.methods.response.EthBlockNumber;
import org.web3j.protocol.core.methods.response.EthGetBalance;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import ss.bond.Web3Samples.service.GeneralService;

import java.util.concurrent.ExecutionException;

@RestController
public class GeneralController {

    private final GeneralService generalService;

    public GeneralController(GeneralService generalService) {
        this.generalService = generalService;
    }

    @GetMapping("/get-block-number")
    EthBlockNumber getBlockNumber() throws ExecutionException, InterruptedException {
        return generalService.getBlockNumber();
    }

    @GetMapping("/get-accounts")
    EthAccounts getEthAccounts() throws ExecutionException, InterruptedException {
        return generalService.getEthAccounts();
    }

    /**
     * example: address = 0x0202577bd2322863292f159ee36ee2a4aa54665d
     */
    @GetMapping("/get-transaction-count/{address}")
    EthGetTransactionCount getTransactionCount(@PathVariable String address) throws ExecutionException, InterruptedException {
        return generalService.getTransactionCount(address);
    }

    /**
     * example: address = 0x0202577bd2322863292f159ee36ee2a4aa54665d
     */
    @GetMapping("/get-balance/{address}")
    EthGetBalance getEthBalance(@PathVariable String address) throws ExecutionException, InterruptedException {
        return generalService.getEthBalance(address);
    }
}
