package ss.bond.Web3Samples.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.web3j.protocol.core.methods.response.EthAccounts;
import org.web3j.protocol.core.methods.response.EthBlockNumber;
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
}
