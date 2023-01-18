package ss.bond.Web3Samples.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;

@Configuration
public class Web3jConfig {

	@Value("${dapp.eth-node}")
	private String ethNode;

	@Value("${dapp.master-private-key}")
	private String masterPrivateKey;

	/**
	 * Web3j provider for developer network.
	 */
	@Bean
	Web3j web3j() {
		return Web3j.build(new HttpService(ethNode));
	}

	/**
	 * Credentials for deploy contract.
	 */
	@Bean
	Credentials masterCredentials() {
		return Credentials.create(masterPrivateKey);
	}
}
