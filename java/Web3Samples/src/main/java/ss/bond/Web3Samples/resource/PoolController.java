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

    @PostMapping("/contract/pool/deploy")
    String deployContract() throws Exception {
        return poolService.deployContract();
    }
}
