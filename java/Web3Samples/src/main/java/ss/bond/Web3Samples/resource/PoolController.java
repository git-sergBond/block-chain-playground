package ss.bond.Web3Samples.resource;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import ss.bond.Web3Samples.service.PoolService;


@RestController
public class PoolController {

    private final PoolService poolService;

    public PoolController(PoolService poolService) {
        this.poolService = poolService;
    }

    /**
     * @return contract address - 0xe17ca252d901b5154d5c5e6acdc078c261ea61fa
     */
    @PostMapping("/contract/pool/deploy")
    String deployContract() throws Exception {
        return poolService.deployContract();
    }
}
