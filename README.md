# SWAAD

SWAAD is a web application that fetches recipes from an [Tasty API](https://rapidapi.com/apidojo/api/tasty), offering users a seamless and responsive platform to discover and explore a variety of dishes. 

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
  - [How to Use](#how-to-use)
  - [Configuration](#configuration)
  - [Examples](#examples)
- [Screenshots](#screenshots)
- [Running the project](#runnig-the-project)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Quick Start](#quick-start)

## Overview
SWAAD is a web application that  offering users a seamless and responsive platform to discover and explore a variety of dishes. The user-friendly interface provides detailed recipe information, search options.
 Built with React.js, Typescript. SWAAD is your go-to source for culinary inspiration.

 ## Features

1. **Search by Name or Ingredients:**
Users can search for recipes by entering either the recipe name or specific ingredients, providing a flexible and convenient search experience.

2. **Autocomplete Feature:**
SWAAD offers autocomplete suggestions as users type, streamlining the search process and ensuring accurate results.

3. **Light and Dark Mode:**
Enjoy a personalized viewing experience with the option to switch between light and dark modes, enhancing readability and reducing eye strain.

4. **Saved Recent Searches:**
Users can conveniently access their recent searches, saving time and enabling quick reference to previously explored recipes.

5. **Detailed Recipe Information:**
Each recipe page provides comprehensive details, including ingredients, nutritional value, preparation time, and step-by-step instructions.

6. **Nutritional Value Display:**
The nutritional information for each recipe is prominently displayed, allowing users to make informed choices based on their dietary preferences or requirements.

7. **Preparation Time Indication:**
Recipes include estimated preparation times, giving users a quick overview of the time commitment required for each dish.

8. **Interactive Checklist for Ingredients:**
Users can mark off ingredients as they gather them, facilitating an organized and efficient cooking process with an interactive checklist.

9. **Responsive Design:**
The SWAAD app is designed to be responsive, ensuring a seamless and enjoyable user experience across various devices, including desktops, tablets, and mobile phones.

10. **User-Friendly Interface:**
The intuitive and user-friendly interface makes navigation smooth, allowing users to focus on discovering and exploring new recipes effortlessly.


## Running the Project
These are the instructions on how to run the SWAAD on your local machine.

### Prerequisites

Ensure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/en/download/): The JavaScript runtime environment for running the project.
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git): Version control system for cloning and managing the project.

### Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/chingu-voyages/v46-tier2-team-14.git
 
    ```

2. **Install Dependencies:**
    ```bash
    npm install
3. **API integration:**
Configure the project to use your recipe API by updating the API key in the `.env` file. Follow these steps:
   - Obtain API Key

    Visit the [Tasty API](https://rapidapi.com/apidojo/api/tasty) website to obtain your API key.

  - Set API Key in `.env`

    1. Copy `.env.template` contents into a `.env` file in the root of your project.
    2. Open the `.env` file and edit the following line:

    ```env
    VITE_API_KEY=YOUR_API_KEY_HERE
    ```

    Replace `YOUR_API_KEY_HERE` with the API key you obtained.

### Quick Start
Follow these steps to quickly start the project:
1. **Run the Application:**
    ```bash
    npm run dev
    ```

2. **Access the Application:**
   Open your web browser and go to `http://localhost:3000` to access the SWAAD web app.