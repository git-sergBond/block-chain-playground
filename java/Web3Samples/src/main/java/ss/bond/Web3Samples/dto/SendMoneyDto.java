package ss.bond.Web3Samples.dto;

import java.math.BigDecimal;
import java.util.Objects;

public class SendMoneyDto {

    /**
     * Example: 0ab77efb866fac8835d0a11e6b1462005654e6ffd3c320e75df46f6362cb3a10
     */
    private String fromPrivateKey;

    /**
     * Example: 0xe17ca252d901b5154d5c5e6acdc078c261ea61fa
     */
    private String toAddress;

    private BigDecimal amount;

    public SendMoneyDto(String fromPrivateKey, String toAddress, BigDecimal amount) {
        this.fromPrivateKey = fromPrivateKey;
        this.toAddress = toAddress;
        this.amount = amount;
    }

    public String getFromPrivateKey() {
        return fromPrivateKey;
    }

    public void setFromPrivateKey(String fromPrivateKey) {
        this.fromPrivateKey = fromPrivateKey;
    }

    public String getToAddress() {
        return toAddress;
    }

    public void setToAddress(String toAddress) {
        this.toAddress = toAddress;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SendMoneyDto that = (SendMoneyDto) o;
        return fromPrivateKey.equals(that.fromPrivateKey) && toAddress.equals(that.toAddress) && amount.equals(that.amount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(fromPrivateKey, toAddress, amount);
    }
}
