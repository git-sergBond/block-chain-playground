package ss.bond.Web3Samples.resource;

import org.springframework.web.bind.annotation.*;
import org.web3j.protocol.core.methods.response.Log;
import ss.bond.Web3Samples.dto.ChoiceWthKeysDto;
import ss.bond.Web3Samples.service.PoolService;

import java.util.List;


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

    /**
     * @param contractAddress - 0xe17ca252d901b5154d5c5e6acdc078c261ea61fa
     */
    @GetMapping("/contract/pool/get-pool/{contract-address}")
    String getPool(@PathVariable("contract-address") String contractAddress) throws Exception {
        return poolService.getPool(contractAddress);
    }

    /**
     * @param contractAddress - 0xe17ca252d901b5154d5c5e6acdc078c261ea61fa
     * @param choiseDto - {
     *     "privateKey" : "0ab77efb866fac8835d0a11e6b1462005654e6ffd3c320e75df46f6362cb3a10",
     *     "choice" : 1
     * }
     */
    @PostMapping("/contract/pool/vote/{contract-address}")
    List<Log> vote(@RequestBody ChoiceWthKeysDto choiseDto,
                   @PathVariable("contract-address") String contractAddress) throws Exception {
        return poolService.vote(choiseDto.getChoice(), choiseDto.getPrivateKey(), contractAddress);
    }
}
