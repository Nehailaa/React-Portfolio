import React from 'react';

export default function Projects() {
    return (
        <div class ="projects">
            <h1 class="display-1 black-header">Projects</h1>
            <div class="card-columns">
                <div class="card">
                    <img src="/images/budget.jpg"  width={320} alt="budget-tracker" />
                    <div class="card-body">
                        <h3 class="card-title">Budget Tracker</h3>
                        <p class="card-text">This Budget Tracker App, the user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they are brought back online.</p>
                        <div class="btn-wrapper">
                            <a href="https://github.com/Nehailaa/Budget-Tracker" class="btn btn-primary">GitHub</a>
                            <a href="https://budgetrackerrr.herokuapp.com/" class="btn btn-primary">Deployment</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/images/EmployeeTracker.png" width={320} alt="Employee-Tracker" />
                        <div class="card-body">
                            <h3 class="card-title">Employee Tracker</h3>
                            <p class="card-text">This amazing application that uses user input from inquirer to populate an employee tracker database displaying members of a company. The app is built a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.</p>
                            <a href="https://github.com/Nehailaa/Employee-Tracker" class="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/images/NoteTaker.jpg" width={320} alt="Note-Taker" />
                        <div class="card-body">
                            <h3 class="card-title">Note Taker</h3>
                            <p class="card-text">This is a great Note Taker application that allows users to add notes, view saved notes and also delete the notes as well. This application uses an express backend, as well as a save and retrieve note data from a JSON file.</p>
                            <a href="https://github.com/Nehailaa/Note-Taker" class="btn btn-primary">GitHub</a>
                            <a href="https://notetaker1995.herokuapp.com/" class="btn btn-primary">Deployment</a>

                        </div>
                    </div>
                    <div class="card">
                        <img src="/images/weather.png" width={320} alt="Weather-Dashboard" />
                        <div class="card-body">
                            <h3 class="card-title">Weather Dashboard</h3>
                            <p class="card-text">A great web application that allows users to search for a city to get the current weather with a 5 day forecast. Cities that users previously looked up will be saved in their local storage.</p>
                            <a href="https://github.com/Nehailaa/Weather-Dashboard" class="btn btn-primary">GitHub</a>
                            <a href="https://nehailaa.github.io/Weather-Dashboard/" class="btn btn-primary">Deployment</a>

                        </div>
                    </div>
                    <div class="card">
                        <img src="/images/NewsletterSignup.png" width={320} alt="Newsletter-Signup" />
                        <div class="card-body">
                            <h3 class="card-title">Newsletter Signup</h3>
                            <p class="card-text">This is a great Newsletter-Signup application that allows users to subscribe to my Newsletter. This application uses an express backend, as well as a save and retrieve note data from a JSON file.</p>
                            <a href="https://github.com/Nehailaa/Newsletter-Signup" class="btn btn-primary">GitHub</a>
                            <a href="https://fast-inlet-90525.herokuapp.com/" class="btn btn-primary">Deployment</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}