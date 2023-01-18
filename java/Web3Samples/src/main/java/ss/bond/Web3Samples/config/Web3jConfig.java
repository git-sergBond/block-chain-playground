package ss.bond.Web3Samples.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;

@Configuration
public class Web3jConfig {

	/**
	 * Web3j provider for developer network.
	 */
	@Bean
	Web3j web3j() {
		return Web3j.build(new HttpService("http://127.0.0.1:8545/"));
	}

	/**
	 * Credentials for deploy contract.
	 */
	@Bean
	Credentials masterCredentials() {
		String signerPrivateKey = "93db582b59bb16aded046d4ecd70457b403cdfd76ead345f61870fc470c289b4";
		return Credentials.create(signerPrivateKey);
	}
}
