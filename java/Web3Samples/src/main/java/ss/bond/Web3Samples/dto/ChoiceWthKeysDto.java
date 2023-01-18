package ss.bond.Web3Samples.dto;

import java.math.BigInteger;
import java.util.Objects;

public class ChoiceWthKeysDto {

    /**
     * Example: 0ab77efb866fac8835d0a11e6b1462005654e6ffd3c320e75df46f6362cb3a10
     */
    private String privateKey;

    /**
     * Example: 1 - YES / 2 - NO
     */
    private BigInteger choice;

    public ChoiceWthKeysDto(String privateKey, BigInteger choice) {
        this.privateKey = privateKey;
        this.choice = choice;
    }

    public String getPrivateKey() {
        return privateKey;
    }

    public void setPrivateKey(String privateKey) {
        this.privateKey = privateKey;
    }

    public BigInteger getChoice() {
        return choice;
    }

    public void setChoice(BigInteger choice) {
        this.choice = choice;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ChoiceWthKeysDto that = (ChoiceWthKeysDto) o;
        return privateKey.equals(that.privateKey) && choice.equals(that.choice);
    }

    @Override
    public int hashCode() {
        return Objects.hash(privateKey, choice);
    }
}
