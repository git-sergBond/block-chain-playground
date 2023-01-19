package ss.bond.Web3Samples.resource;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.web3j.model.Pool;
import ss.bond.Web3Samples.dto.ChoiceWthKeysDto;
import ss.bond.Web3Samples.dto.DeployPoolDto;
import ss.bond.Web3Samples.service.PoolService;

import java.math.BigInteger;
import java.util.List;


@RestController
public class PoolController {

    private final PoolService poolService;

    public PoolController(PoolService poolService) {
        this.poolService = poolService;
    }

    /**
     * @param dto {
     *     "subject":"Выбираем ЯП для следующего проекта: 0) Java 1) NodeJS 2) Golang",
     *     "proposalCount":3
     * }
     * @return contract address - 0xe17ca252d901b5154d5c5e6acdc078c261ea61fa
     */
    @PostMapping("/contract/pool/deploy")
    String deployContract(@RequestBody DeployPoolDto dto) throws Exception {
        return poolService.deployContract(dto.getSubject(), dto.getProposalCount());
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
     * @return [
     *     {
     *         "log": {
     *             "removed": false,
     *             "logIndex": 0,
     *             "transactionIndex": 0,
     *             "transactionHash": "0xd6e006e71e854e2f1b2abae46f34dbb22a75ed0181b96a61d1ab691fe8fa42b2",
     *             "blockHash": "0xbb50514d48630892a93f5131cef73b508c3b6f33243344b0b59278ebe96639a6",
     *             "blockNumber": 10,
     *             "address": "0x196aed2a0beb73518394d811d181a224ce14273d",
     *             "data": "0x000000000000000000000000d912d5a664708a1b9349f43ec6ec293ff056c94b0000000000000000000000000000000000000000000000000000000000000001",
     *             "type": null,
     *             "topics": [
     *                 "0x4d99b957a2bc29a30ebd96a7be8e68fe50a3c701db28a91436490b7d53870ca4"
     *             ],
     *             "transactionIndexRaw": "0x0",
     *             "logIndexRaw": "0x0",
     *             "blockNumberRaw": "0xa"
     *         },
     *
     *         "_voter": "0xd912d5a664708a1b9349f43ec6ec293ff056c94b",
     *         "_value": 1
     *     }
     *
     *     !!! NOTE: VALUES GO AFTER "log" value. For example is: "_voter" AND "_value" !!!
     * ]
     */
    @PostMapping("/contract/pool/vote/{contract-address}")
    List<Pool.VotedEventResponse> vote(@RequestBody ChoiceWthKeysDto choiseDto,
                                       @PathVariable("contract-address") String contractAddress) throws Exception {
        return poolService.vote(choiseDto.getChoice(), choiseDto.getPrivateKey(), contractAddress);
    }

    /**
     * @param contractAddress - 0xe17ca252d901b5154d5c5e6acdc078c261ea61fa
     */
    @GetMapping("/contract/pool/get-result/{contract-address}")
    BigInteger getResult(@PathVariable("contract-address") String contractAddress) throws Exception {
        return poolService.getResult(contractAddress);
    }
}
