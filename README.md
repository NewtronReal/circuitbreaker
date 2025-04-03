# CircuitBreaker

CircuitBreaker is a simulator designed to emulate attacks on UART and other hardware communication protocols. It provides a platform for security researchers and hardware enthusiasts to understand and analyze potential vulnerabilities in hardware communications.

## Features

- **UART Protocol Simulation**: Emulate UART communication to test and analyze potential attack vectors.
- **Extensible Architecture**: Easily adaptable to incorporate additional hardware communication protocols.
- **Real-time Analysis**: Monitor and assess the impact of simulated attacks in real-time.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/NewtronReal/circuitbreaker.git
   ```


2. **Navigate to the Project Directory**:

   ```bash
   cd circuitbreaker
   ```


3. **Install Dependencies**:

   ```bash
   npm install
   ```


### Running the Simulator

To start the development server:


```bash
npm run dev
```


This will launch the simulator, and you can access it in your browser at `http://localhost:3000`.

## Project Structure

- **`public/`**: Contains static assets and the main `index.html` file.
- **`src/`**: Contains the React components and main application logic.
- **`.firebase/`**: Configuration files for Firebase integration.
- **`eslint.config.js`**: Configuration for ESLint to maintain code quality.
- **`vite.config.js`**: Configuration for Vite, the build tool used in this project.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

Special thanks to all contributors and the open-source community for their invaluable support. 
