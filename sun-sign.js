// zodiac.js
// A module to determine sun sign from a yyyy-mm-dd date string

// Example dictionary of date ranges → sun signs
const sunSigns = {
  "2026-01-01..2026-01-19": "Capricorn",
  "2026-01-20..2026-02-18": "Aquarius",
  "2026-02-19..2026-03-20": "Pisces",
  "2026-03-21..2026-04-19": "Aries",
  "2026-04-20..2026-05-20": "Taurus",
  "2026-05-21..2026-06-20": "Gemini",
  "2026-06-21..2026-07-22": "Cancer",
  "2026-07-23..2026-08-22": "Leo",
  "2026-08-23..2026-09-22": "Virgo",
  "2026-09-23..2026-10-22": "Libra",
  "2026-10-23..2026-11-21": "Scorpio",
  "2026-11-22..2026-12-21": "Sagittarius",
  "2026-12-22..2026-12-31": "Capricorn"
};

/**
 * Parse yyyy-mm-dd string into {month, day}
 */
function parseDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return { year, month, day };
}

/**
 * Determine sun sign for a given date string
 */
function getSunSign(dateStr) {
  const { month, day } = parseDate(dateStr);

  for (const range in sunSigns) {
    const [start, end] = range.split("..");
    const [, startMonth, startDay] = start.split("-").map(Number);
    const [, endMonth, endDay] = end.split("-").map(Number);

    // If the date's month matches either start or end month
    if (month === startMonth || month === endMonth) {
      if (month === startMonth && day >= startDay) {
        return sunSigns[range];
      }
      if (month === endMonth && day <= endDay) {
        return sunSigns[range];
      }
    }
  }

  return null; // No match found
}

// Example usage:
console.log(getSunSign("2026-03-25")); // Aries
console.log(getSunSign("2026-02-10")); // Aquarius
console.log(getSunSign("2026-12-30")); // Capricorn

// Export for use as a module
module.exports = { getSunSign };
