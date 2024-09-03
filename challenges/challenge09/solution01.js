function adjustLights(lights) {
  let changesGreen = 0;
  let changesRed = 0;

  for (let i = 0; i < lights.length; i++) {
    if (i % 2 == 0) {
      if (lights[i] === '🟢') changesGreen++;
      if (lights[i] === '🔴') changesRed++;
    } else {
      if (lights[i] != '🟢') changesGreen++;
      if (lights[i] != '🔴') changesRed++;
    }
  }

  return changesGreen < changesRed ? changesGreen : changesRed;
}

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']);
// -> 1 (you change the fourth light to 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']);
// -> 2 (you change the second light to 🟢 and the third to 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']);
// -> 0 (they are already alternating)

adjustLights(['🔴', '🔴', '🔴']);
// -> 1 (you change the second light to 🟢)
