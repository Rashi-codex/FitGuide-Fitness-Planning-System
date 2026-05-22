function generateProfilePlan() {
    const age = document.getElementById("age").value;
    const goal = document.getElementById("goal").value;

    document.getElementById("result").innerHTML =
        "Profile Created for Age: " + age + " | Goal: " + goal;
}





function generatePlan() {

    let ageGroup = document.getElementById("ageGroup").value;
    let workoutType = document.getElementById("workoutType").value;

    let plan = "";

    if (ageGroup === "teen") {
        if (workoutType === "strength") {
            plan = "Push-ups, Squats, Light Dumbbells (3 sets)";
        } else if (workoutType === "calisthenics") {
            plan = "Jumping Jacks, Plank, Mountain Climbers";
        } else {
            plan = "Basic Stretching, Yoga for Kids";
        }
    }

    else if (ageGroup === "adult") {
        if (workoutType === "strength") {
            plan = "Bench Press, Deadlift, Squats (4 sets)";
        } else if (workoutType === "calisthenics") {
            plan = "Pull-ups, Dips, Burpees";
        } else {
            plan = "Yoga, Mobility Drills, Stretching";
        }
    }

    else {
        if (workoutType === "strength") {
            plan = "Light Resistance Bands, Bodyweight Squats";
        } else if (workoutType === "calisthenics") {
            plan = "Wall Push-ups, Slow Marching";
        } else {
            plan = "Chair Yoga, Gentle Stretching";
        }
    }

    document.getElementById("exerciseResult").innerHTML =
        "<h3>Your Plan:</h3><p>" + plan + "</p>";
}




function generateDiet() {

    const goal = document.getElementById("dietGoal").value;

    let dietPlan = "";

    // 🔹 Basic Nutrition Knowledge (Common for All)
    dietPlan += `
        <h3> Nutrition Basics</h3>
        <ul>
            <b>Protein:</b> Muscle repair & growth (eggs, paneer, chicken, dal)
            <br>
            <b>Carbs:</b> Energy source (rice, roti, fruits)
            <br>
            <b>Fats:</b> Hormonal balance (nuts, seeds, healthy oils)
            <br>Micronutrients:</b> Vitamins & minerals (vegetables, fruits)
            <br>
            <b>Hydration:</b> 2.5–3 liters water daily
        </ul>
        <p> Focus on lifestyle-friendly eating — avoid extreme dieting.</p>
    `;

    // 🔹 Weight Loss
    if (goal === "weightLoss") {
        dietPlan += `
        <h3> Weight Loss Guidance</h3>
        <ul>
            Maintain a small calorie deficit
            <br>
            Increase protein intake (1.6–2g/kg)
            <br>
            Limit sugary drinks & processed food
            <br>
            Walk 8–10k steps daily
        </ul>
        <p><b>Focus:</b> Sustainable habits, not crash dieting.</p>
        `;
    }

    // 🔹 Muscle Gain
    else if (goal === "muscleGain") {
        dietPlan += `
        <h3>  Muscle Gain Guidance</h3>
        <ul>
            Eat slightly above maintenance calories
            <br>
            Protein: approx 1.6–2g per kg bodyweight
            <br>
            Post-workout protein + carbs
            <br>
            Sleep 7–8 hours for recovery
        </ul>
        <p><b>Focus:</b> Recovery nutrition + progressive training.</p>
        `;
    }

    // 🔹 General Fitness
    else if (goal === "generalFitness") {
        dietPlan += `
        <h3> General Fitness Nutrition</h3>
        <ul>
            Balanced plate: Protein + Carbs + Veggies<br>
            Include micronutrients (iron, calcium, vitamins)<br>
            Moderate portions<br>
            Stay active daily<br>
        </ul>
        <p><b>Focus:</b> Long-term healthy lifestyle.</p>
        `;
    }

    document.getElementById("dietResult").innerHTML = dietPlan;
}

// BMI
function calculateBMI() {
    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;

    let bmi = (weight / (height * height)).toFixed(2);

    document.getElementById("bmiResult").innerHTML =
        "Your BMI is: <b>" + bmi + "</b>";
}

// Calories (basic formula)
function calculateCalories() {
    let age = document.getElementById("ageCal").value;
    let weight = document.getElementById("weightCal").value;
    let height = document.getElementById("heightCal").value;

    let calories = (10 * weight + 6.25 * height - 5 * age + 5).toFixed(0);

    document.getElementById("calorieResult").innerHTML =
        "Estimated Daily Calories: <b>" + calories + " kcal</b>";
}

// Protein
function calculateProtein() {
    let weight = document.getElementById("weightProtein").value;
    let protein = (weight * 1.6).toFixed(1);

    document.getElementById("proteinResult").innerHTML =
        "Recommended Protein Intake: <b>" + protein + " g/day</b>";
}

// Fat %
function calculateFat() {
    let waist = document.getElementById("waist").value;
    let neck = document.getElementById("neck").value;

    let fat = ((waist - neck) * 0.5).toFixed(1);

    document.getElementById("fatResult").innerHTML =
        "Estimated Body Fat %: <b>" + fat + "%</b>";
}


function showKnowledge(type) {

    let content = "";

    if (type === "myths") {
        content = `
        <h3>Myths vs Facts</h3>
        <ul>
            <li>❌ Myth: Sweating means fat loss</li>
            <li>✅ Fact: Fat loss happens through calorie deficit</li>
            <li>❌ Myth: Carbs make you fat</li>
            <li>✅ Fact: Excess calories cause weight gain</li>
        </ul>
        `;
    }

    else if (type === "mistakes") {
        content = `
        <h3>Beginner Mistakes</h3>
        <ul>
            <li>Doing too much cardio</li>
            <li>Skipping warm-up</li>
            <li>Inconsistent workouts</li>
            <li>Expecting fast results</li>
        </ul>
        `;
    }

    else if (type === "psychology") {
        content = `
        <h3>Lifestyle Psychology</h3>
        <ul>
            <li>Build identity-based habits</li>
            <li>Focus on long-term growth</li>
            <li>Avoid comparison</li>
            <li>Celebrate small progress</li>
        </ul>
        `;
    }

    else if (type === "habits") {
        content = `
        <h3>Consistency Habits</h3>
        <ul>
            <li>Workout same time daily</li>
            <li>Track progress weekly</li>
            <li>Sleep 7-8 hours</li>
            <li>Stay hydrated</li>
        </ul>
        `;
    }

    document.getElementById("knowledgeResult").innerHTML = content;
}


// Accordion Toggle
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-btn");

    accordions.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});