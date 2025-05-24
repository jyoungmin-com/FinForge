[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]
<!--     [![LinkedIn][linkedin-shield]][linkedin-url] -->

<br />
<div align="center">
  <a href="https://github.com/jyoungmin-com/finForge">
    <img src="https://github.com/jyoungmin-com/finForge/blob/main/src/main/resources/static/images/LOGO-full-bg.png" alt="Logo" width="350" height="80">
  </a>

  <h3 align="center">finForge</h3>

  <p align="center">
    A personal financial simulation & growth-oriented asset game platform.
    <br />
    <a href="https://github.com/jyoungmin-com/finForge"><strong>Explore the docs »</strong></a>
    <br />
    <br />
<!--     <a href="https://github.com/jyoungmin-com/finForge">View Demo</a>
    &middot; -->
    <a href="https://github.com/jyoungmin-com/finForge/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/jyoungmin-com/finForge/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a>
      <ul><li><a href="#built-with">Built With</a></li></ul>
    </li>
    <li><a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#configuration">Configuration</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

[![finForge Screenshot][product-screenshot]](https://github.com/jyoungmin-com/finForge)

finForge is a **virtual finance simulator** that enhances users' financial literacy through gamified experiences. Users receive an initial asset allocation and can:

- Trade virtual stocks with real or mock data  
- Send and receive peer-to-peer remittances with automatic failure rollback  
- Create and manage shared wallets for collaborative budgeting  
- Earn AI-driven weekly performance feedback  
- Stay informed via an in-app notification center  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33.svg?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![Thymeleaf](https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white)](https://www.thymeleaf.org/)
[![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Apache Maven](https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white)](https://maven.apache.org/)



[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
[![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/) (future)
 	

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Follow these steps to run finForge locally.

### Prerequisites

- Java 21 or higher  
- Maven 3.x  
- Docker & Docker Compose  

### Installation

1. **Clone the repository**  
   ```sh
   git clone https://github.com/jyoungmin-com/finForge.git
   cd finForge
   ```
2. **Build the project**  
   ```sh
   mvn package -DskipTests
   ```
3. **Start services**  
   ```sh
   docker-compose up --build
   ```
4. **Access the application**  
   Open [http://localhost:8080](http://localhost:8080) in your browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Configuration



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. **Sign Up** to receive virtual starting assets.  
2. **Dashboard**: View your portfolio and activity.  
3. **Stocks**: Buy and sell virtual stocks.  
4. **Remittance**: Transfer funds P2P.  
5. **Shared Wallets**: Manage group budgets.  
6. **Notifications**: Receive alerts and AI feedback.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] MVP: Authentication, Assets, Trading, Remittance, Shared Wallets  
- [ ] v1.1: AI Advisor & Weekly Reports  
- [ ] v1.2: Badges & Gamification  
- [ ] v2.0: Real-time market data, Mobile UI  

See [open issues](https://github.com/jyoungmin-com/finForge/issues) for more.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the Project  
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your Changes (`git commit -m 'Add AmazingFeature'`)  
4. Push to the Branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top Contributors

<a href="https://github.com/jyoungmin-com/finForge/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jyoungmin-com/finForge" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the Apache License 2.0. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

**Youngmin Jung** – sgt.youngmin@gmail.com
Project Link: [https://github.com/jyoungmin-com/finForge](https://github.com/jyoungmin-com/finForge)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

- [Choose an Open Source License](https://choosealicense.com)  
- [Img Shields](https://shields.io)  
- [GitHub Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet)
- [GitHub README templates](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/jyoungmin-com/finForge.svg?style=for-the-badge
[contributors-url]: https://github.com/jyoungmin-com/finForge/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jyoungmin-com/finForge.svg?style=for-the-badge
[forks-url]: https://github.com/jyoungmin-com/finForge/network/members
[stars-shield]: https://img.shields.io/github/stars/jyoungmin-com/finForge.svg?style=for-the-badge
[stars-url]: https://github.com/jyoungmin-com/finForge/stargazers
[issues-shield]: https://img.shields.io/github/issues/jyoungmin-com/finForge.svg?style=for-the-badge
[issues-url]: https://github.com/jyoungmin-com/finForge/issues
[license-shield]: https://img.shields.io/github/license/jyoungmin-com/finForge.svg?style=for-the-badge
[license-url]: https://github.com/jyoungmin-com/finForge/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin
[linkedin-url]: https://linkedin.com/in/jung-youngmin
[product-screenshot]: images/product-screenshot.png 
