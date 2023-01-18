package ss.bond.Web3Samples.dto;

import java.math.BigInteger;
import java.util.Objects;

public class DeployPoolDto {

    private String subject;

    private BigInteger proposalCount;

    public DeployPoolDto(String subject, BigInteger proposalCount) {
        this.subject = subject;
        this.proposalCount = proposalCount;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public BigInteger getProposalCount() {
        return proposalCount;
    }

    public void setProposalCount(BigInteger proposalCount) {
        this.proposalCount = proposalCount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DeployPoolDto that = (DeployPoolDto) o;
        return subject.equals(that.subject) && proposalCount.equals(that.proposalCount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(subject, proposalCount);
    }
}
