Static Website Hosting Using Amazon S3, CloudFront, and GitHub Actions

Project Overview

This project demonstrates a secure, automated, and production-style static website hosting architecture on AWS.

Instead of exposing an Amazon S3 bucket directly to the internet, the website uses Amazon CloudFront as the public-facing content delivery network (CDN), while the S3 bucket remains completely private using Origin Access Control (OAC).

The deployment process is fully automated using GitHub Actions CI/CD, and operational monitoring is implemented using Amazon CloudWatch and Amazon SNS.

---

Architecture

Developer
   ↓ Git Push
GitHub Repository
   ↓
GitHub Actions (CI/CD)
   ↓ OIDC Authentication
AWS IAM Role
   ↓
Amazon S3 (Private Bucket)
   ↓
Amazon CloudFront (HTTPS + CDN)
   ↓
Website Users

Monitoring Pipeline:
CloudFront Metrics
   ↓
CloudWatch Alarm
   ↓
SNS Email Notification

---

Features

- Private Amazon S3 bucket with Block Public Access enabled
- Secure content delivery using Amazon CloudFront
- HTTPS enabled using CloudFront default certificates
- Origin Access Control (OAC) for private S3 access
- CI/CD deployment using GitHub Actions
- Secure authentication using IAM OIDC federation
- No AWS access keys stored in GitHub
- CloudWatch monitoring for CloudFront error metrics
- SNS email notifications for infrastructure issues
- Zero-cost deployment within AWS Free Tier limits

---

AWS Services Used

Service| Purpose
Amazon S3| Stores website files securely
Amazon CloudFront| CDN and HTTPS delivery
AWS IAM| Identity and access management
Amazon CloudWatch| Monitoring and metrics
Amazon SNS| Email notifications
GitHub Actions| CI/CD automation

---

Deployment Workflow

1. Developer pushes code to the GitHub repository.
2. GitHub Actions workflow starts automatically.
3. GitHub authenticates with AWS using OIDC.
4. Temporary credentials are issued by IAM.
5. Website files are synchronized to Amazon S3.
6. CloudFront cache is invalidated.
7. Updated content becomes available globally.

---

Security Architecture

Private Origin Pattern

The S3 bucket is never publicly accessible.

Only the CloudFront distribution can retrieve objects from S3 using Origin Access Control (OAC).

Users → CloudFront → Private S3 Bucket

This approach prevents direct access to the storage layer and follows modern cloud security practices.

---

Monitoring and Alerting

The project continuously monitors CloudFront metrics using CloudWatch.

If the 5xx Error Rate exceeds the configured threshold:

- CloudWatch changes the alarm state.
- Amazon SNS sends an email notification to the team.
- Infrastructure issues can be detected quickly.

---

CI/CD Using GitHub Actions

The deployment pipeline uses GitHub Actions with AWS IAM OIDC federation.

Benefits:

- No long-lived AWS access keys
- Temporary credentials only
- Repository-specific access permissions
- Improved security posture

---

Repository Structure

.
├── index.html
├── error.html
├── css/
├── js/
├── assets/
└── .github/
    └── workflows/
        └── deploy.yml

---

Challenges Faced

- Understanding the difference between S3 Website Endpoint and REST API Endpoint
- Configuring Origin Access Control correctly
- Setting up IAM OIDC federation with GitHub Actions
- Managing CloudFront cache invalidation
- Verifying CloudWatch alarms with low traffic

---

Team Members

Name| Responsibility
Bandi Mohan Sai Manikanta| S3, CloudFront, CI/CD
Devarapalli Charan| IAM and OIDC Federation
Adimolu V V Naga Durgesh| CloudWatch and SNS Alerting
Sadapu Sanjay Rishi| Frontend and Documentation
Tanni Dhanunjay| Testing and Cost Governance

---

Future Enhancements

- Custom domain integration using Route 53
- SSL certificate management using ACM
- Separate staging and production environments
- Additional monitoring metrics and dashboards
- Infrastructure as Code using Terraform or AWS CloudFormation

---

Learning Outcomes

This project provided hands-on experience with:

- Amazon S3
- Amazon CloudFront
- IAM and OIDC Federation
- GitHub Actions CI/CD
- CloudWatch Monitoring
- SNS Alerting
- Cloud Security Best Practices
- Production-style AWS Architectures

---

Conclusion

This project demonstrates that static website hosting can be secure, automated, monitored, and production-ready while remaining cost-effective.

The architecture follows modern cloud engineering practices and serves as an excellent learning project for AWS, DevOps, and Cloud Computing concepts.
