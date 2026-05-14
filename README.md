# EKKA's

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

EKKA's is an open-source tourism dashboard that visualizes Net Promoter Score (NPS) and other key metrics for Japan's Hokuriku region (Toyama, Ishikawa, and Fukui prefectures). It features a futuristic, cyberpunk-inspired interface and uses AI-generated images to represent demographic data.

## Demo

[**EKKA's Tourism NPS Dashboard**](https://code4fukui.github.io/ekkas/)

## Features

-   **NPS Time-Series:** Visualize trends in tourist satisfaction (NPS) over time.
-   **Attraction Rankings:** Display popularity rankings for various tourist spots.
-   **Demographic Analysis:** Analyze visitor satisfaction filtered by demographics (age, gender), represented by AI-generated face icons.
-   **Regional Comparison:** Compare key tourism metrics across the three Hokuriku prefectures.
-   **VR View:** Includes an experimental VR dashboard view powered by A-Frame.

## Local Development

### Prerequisites

-   [Deno](https://deno.land/) runtime
-   An OpenAI API key for generating face icons.

### Setup & Usage

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/code4fukui/ekkas.git
    cd ekkas
    ```

2.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your OpenAI API key:
    ```
    OPENAI_API_KEY="sk-..."
    ```

3.  **Generate Face Icons (Optional):**
    The dashboard uses AI-generated images to visualize demographic segments. To generate these images yourself, run the following command:
    ```bash
    deno run --allow-net --allow-read --allow-write genImageFace.js
    ```

4.  **View the Dashboard:**
    Open `index.html` in your web browser. For best results, serve the project directory with a local web server.

## Data Sources

This project was developed as part of the "Hokuriku Inbound Tourism Open Data Hackathon 2025". It utilizes open data from the following repositories:

-   [code4fukui/opendata-hokuriku](https://github.com/code4fukui/opendata-hokuriku)
-   [hokuriku-inbound-kanko/opendata](https://github.com/hokuriku-inbound-kanko/opendata)

## License

MIT License