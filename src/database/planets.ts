const planets = [
  {
    id: 1,
    slug: "mercury",
    name: "Mercury",
    type: "Solid",
    info: {
      planet: {
        name: "Planet",
        value: "Mercury",
      },
      color: {
        name: "Color",
        value: "Grey",
      },
      mass: {
        name: "Mass (10^24kg)",
        value: 0.33,
      },
      diameter: {
        name: "Diameter (km)",
        value: 4879,
      },
      density: {
        name: "Density (kg/m^3)",
        value: 5429,
      },
      surface_gravity: {
        name: "Surface Gravity(m/s^2)",
        value: 3.7,
      },
      escape_velocity: {
        name: "Escape Velocity (km/s)",
        value: 4.3,
      },
      rotation_period: {
        name: "Rotation Period (hours)",
        value: 1407.6,
      },
      length_of_day: {
        name: "Length of Day (hours)",
        value: 4222.6,
      },
      distance_from_sun: {
        name: "Distance from Sun (10^6 km)",
        value: 57.9,
      },
      perihelion: {
        name: "Perihelion (10^6 km)",
        value: 46,
      },
      aphelion: {
        name: "Aphelion (10^6 km)",
        value: 69.8,
      },
      orbital_period: {
        name: "Orbital Period (days)",
        value: 88,
      },
      orbital_velocity: {
        name: "Orbital Velocity (km/s)",
        value: 47.4,
      },
      orbital_inclination: {
        name: "Orbital Inclination (degrees)",
        value: 7,
      },
      orbital_eccentricity: {
        name: "Orbital Eccentricity",
        value: 0.206,
      },
      obliquity_to_orbit: {
        name: "Obliquity to Orbit (degrees)",
        value: 0.034,
      },
      mean_temperature: {
        name: "Mean Temperature (C)",
        value: 167,
      },
      surface_pressure: {
        name: "Surface Pressure (bars)",
        value: 0,
      },
      number_of_moons: {
        name: "Number of Moons",
        value: 0,
      },
      ring_system: {
        name: "Ring System?",
        value: "No",
      },
      global_magnetic_field: {
        name: "Global Magnetic Field?",
        value: "Yes",
      },
    },
  },
  {
    id: 2,
    slug: "venus",
    name: "Venus",
    type: "Solid",
    info: {
      planet: {
        name: "Planet",
        value: "Venus",
      },
      color: {
        name: "Color",
        value: "Brown and Grey",
      },
      mass: {
        name: "Mass (10^24kg)",
        value: 4.87,
      },
      diameter: {
        name: "Diameter (km)",
        value: 12104,
      },
      density: {
        name: "Density (kg/m^3)",
        value: 5243,
      },
      surface_gravity: {
        name: "Surface Gravity(m/s^2)",
        value: 8.9,
      },
      escape_velocity: {
        name: "Escape Velocity (km/s)",
        value: 10.4,
      },
      rotation_period: {
        name: "Rotation Period (hours)",
        value: 5,//-5832.5,
      },
      length_of_day: {
        name: "Length of Day (hours)",
        value: 2802,
      },
      distance_from_sun: {
        name: "Distance from Sun (10^6 km)",
        value: 108.2,
      },
      perihelion: {
        name: "Perihelion (10^6 km)",
        value: 107.5,
      },
      aphelion: {
        name: "Aphelion (10^6 km)",
        value: 108.9,
      },
      orbital_period: {
        name: "Orbital Period (days)",
        value: 224.7,
      },
      orbital_velocity: {
        name: "Orbital Velocity (km/s)",
        value: 35,
      },
      orbital_inclination: {
        name: "Orbital Inclination (degrees)",
        value: 3.4,
      },
      orbital_eccentricity: {
        name: "Orbital Eccentricity",
        value: 0.007,
      },
      obliquity_to_orbit: {
        name: "Obliquity to Orbit (degrees)",
        value: 177.4,
      },
      mean_temperature: {
        name: "Mean Temperature (C)",
        value: 464,
      },
      surface_pressure: {
        name: "Surface Pressure (bars)",
        value: 92,
      },
      number_of_moons: {
        name: "Number of Moons",
        value: 0,
      },
      ring_system: {
        name: "Ring System?",
        value: "No",
      },
      global_magnetic_field: {
        name: "Global Magnetic Field?",
        value: "No",
      },
    },
  },
  {
    id: 3,
    slug: "earth",
    name: "Earth",
    type: "Solid",
    info: {
      planet: {
        name: "Planet",
        value: "Earth",
      },
      color: {
        name: "Color",
        value: "Blue, Brown Green and White",
      },
      mass: {
        name: "Mass (10^24kg)",
        value: 5.97,
      },
      diameter: {
        name: "Diameter (km)",
        value: 12756,
      },
      density: {
        name: "Density (kg/m^3)",
        value: 5514,
      },
      surface_gravity: {
        name: "Surface Gravity(m/s^2)",
        value: 9.8,
      },
      escape_velocity: {
        name: "Escape Velocity (km/s)",
        value: 11.2,
      },
      rotation_period: {
        name: "Rotation Period (hours)",
        value: 23.9,
      },
      length_of_day: {
        name: "Length of Day (hours)",
        value: 24,
      },
      distance_from_sun: {
        name: "Distance from Sun (10^6 km)",
        value: 149.6,
      },
      perihelion: {
        name: "Perihelion (10^6 km)",
        value: 147.1,
      },
      aphelion: {
        name: "Aphelion (10^6 km)",
        value: 152.1,
      },
      orbital_period: {
        name: "Orbital Period (days)",
        value: 365.2,
      },
      orbital_velocity: {
        name: "Orbital Velocity (km/s)",
        value: 29.8,
      },
      orbital_inclination: {
        name: "Orbital Inclination (degrees)",
        value: 0,
      },
      orbital_eccentricity: {
        name: "Orbital Eccentricity",
        value: 0.017,
      },
      obliquity_to_orbit: {
        name: "Obliquity to Orbit (degrees)",
        value: 23.4,
      },
      mean_temperature: {
        name: "Mean Temperature (C)",
        value: 15,
      },
      surface_pressure: {
        name: "Surface Pressure (bars)",
        value: 1,
      },
      number_of_moons: {
        name: "Number of Moons",
        value: 1,
      },
      ring_system: {
        name: "Ring System?",
        value: "No",
      },
      global_magnetic_field: {
        name: "Global Magnetic Field?",
        value: "Yes",
      },
    },
  },
  {
    id: 4,
    slug: "mars",
    name: "Mars",
    type: "Solid",
    info: {
      planet: {
        name: "Planet",
        value: "Mars",
      },
      color: {
        name: "Color",
        value: "Red, Brown and Tan",
      },
      mass: {
        name: "Mass (10^24kg)",
        value: 0.642,
      },
      diameter: {
        name: "Diameter (km)",
        value: 6792,
      },
      density: {
        name: "Density (kg/m^3)",
        value: 3934,
      },
      surface_gravity: {
        name: "Surface Gravity(m/s^2)",
        value: 3.7,
      },
      escape_velocity: {
        name: "Escape Velocity (km/s)",
        value: 5,
      },
      rotation_period: {
        name: "Rotation Period (hours)",
        value: 24.6,
      },
      length_of_day: {
        name: "Length of Day (hours)",
        value: 24.7,
      },
      distance_from_sun: {
        name: "Distance from Sun (10^6 km)",
        value: 228,
      },
      perihelion: {
        name: "Perihelion (10^6 km)",
        value: 206.7,
      },
      aphelion: {
        name: "Aphelion (10^6 km)",
        value: 249.3,
      },
      orbital_period: {
        name: "Orbital Period (days)",
        value: 687,
      },
      orbital_velocity: {
        name: "Orbital Velocity (km/s)",
        value: 24.1,
      },
      orbital_inclination: {
        name: "Orbital Inclination (degrees)",
        value: 1.8,
      },
      orbital_eccentricity: {
        name: "Orbital Eccentricity",
        value: 0.094,
      },
      obliquity_to_orbit: {
        name: "Obliquity to Orbit (degrees)",
        value: 25.2,
      },
      mean_temperature: {
        name: "Mean Temperature (C)",
        value: -65,
      },
      surface_pressure: {
        name: "Surface Pressure (bars)",
        value: 0.01,
      },
      number_of_moons: {
        name: "Number of Moons",
        value: 2,
      },
      ring_system: {
        name: "Ring System?",
        value: "No",
      },
      global_magnetic_field: {
        name: "Global Magnetic Field?",
        value: "No",
      },
    },
  },
  {
    id: 5,
    slug: "jupiter",
    name: "Jupiter",
    type: "Gas",
    info: {
      planet: {
        name: "Planet",
        value: "Jupiter",
      },
      color: {
        name: "Color",
        value: "Brown, Orange and Tan, with White cloud stripes",
      },
      mass: {
        name: "Mass (10^24kg)",
        value: 1898,
      },
      diameter: {
        name: "Diameter (km)",
        value: 142984,
      },
      density: {
        name: "Density (kg/m^3)",
        value: 1326,
      },
      surface_gravity: {
        name: "Surface Gravity(m/s^2)",
        value: 23.1,
      },
      escape_velocity: {
        name: "Escape Velocity (km/s)",
        value: 59.5,
      },
      rotation_period: {
        name: "Rotation Period (hours)",
        value: 9.9,
      },
      length_of_day: {
        name: "Length of Day (hours)",
        value: 9.9,
      },
      distance_from_sun: {
        name: "Distance from Sun (10^6 km)",
        value: 778.5,
      },
      perihelion: {
        name: "Perihelion (10^6 km)",
        value: 740.6,
      },
      aphelion: {
        name: "Aphelion (10^6 km)",
        value: 816.4,
      },
      orbital_period: {
        name: "Orbital Period (days)",
        value: 4331,
      },
      orbital_velocity: {
        name: "Orbital Velocity (km/s)",
        value: 13.1,
      },
      orbital_inclination: {
        name: "Orbital Inclination (degrees)",
        value: 1.3,
      },
      orbital_eccentricity: {
        name: "Orbital Eccentricity",
        value: 0.049,
      },
      obliquity_to_orbit: {
        name: "Obliquity to Orbit (degrees)",
        value: 3.1,
      },
      mean_temperature: {
        name: "Mean Temperature (C)",
        value: -110,
      },
      surface_pressure: {
        name: "Surface Pressure (bars)",
        value: "Unknown",
      },
      number_of_moons: {
        name: "Number of Moons",
        value: 92,
      },
      ring_system: {
        name: "Ring System?",
        value: "Yes",
      },
      global_magnetic_field: {
        name: "Global Magnetic Field?",
        value: "Yes",
      },
    },
  },
  {
    id: 6,
    slug: "saturn",
    name: "Saturn",
    type: "Gas",
    info: {
      planet: {
        name: "Planet",
        value: "Saturn",
      },
      color: {
        name: "Color",
        value: "Golden, Brown, and Blue-Grey",
      },
      mass: {
        name: "Mass (10^24kg)",
        value: 568,
      },
      diameter: {
        name: "Diameter (km)",
        value: 120536,
      },
      density: {
        name: "Density (kg/m^3)",
        value: 687,
      },
      surface_gravity: {
        name: "Surface Gravity(m/s^2)",
        value: 9,
      },
      escape_velocity: {
        name: "Escape Velocity (km/s)",
        value: 35.5,
      },
      rotation_period: {
        name: "Rotation Period (hours)",
        value: 10.7,
      },
      length_of_day: {
        name: "Length of Day (hours)",
        value: 10.7,
      },
      distance_from_sun: {
        name: "Distance from Sun (10^6 km)",
        value: 1432,
      },
      perihelion: {
        name: "Perihelion (10^6 km)",
        value: 1357.6,
      },
      aphelion: {
        name: "Aphelion (10^6 km)",
        value: 1506.5,
      },
      orbital_period: {
        name: "Orbital Period (days)",
        value: 10747,
      },
      orbital_velocity: {
        name: "Orbital Velocity (km/s)",
        value: 9.7,
      },
      orbital_inclination: {
        name: "Orbital Inclination (degrees)",
        value: 2.5,
      },
      orbital_eccentricity: {
        name: "Orbital Eccentricity",
        value: 0.052,
      },
      obliquity_to_orbit: {
        name: "Obliquity to Orbit (degrees)",
        value: 26.7,
      },
      mean_temperature: {
        name: "Mean Temperature (C)",
        value: -140,
      },
      surface_pressure: {
        name: "Surface Pressure (bars)",
        value: "Unknown",
      },
      number_of_moons: {
        name: "Number of Moons",
        value: 82,
      },
      ring_system: {
        name: "Ring System?",
        value: "Yes",
      },
      global_magnetic_field: {
        name: "Global Magnetic Field?",
        value: "Yes",
      },
    },
  },
  {
    id: 7,
    slug: "uranus",
    name: "Uranus",
    type: "Gas",
    info: {
      planet: {
        name: "Planet",
        value: "Uranus",
      },
      color: {
        name: "Color",
        value: "Blue-Green",
      },
      mass: {
        name: "Mass (10^24kg)",
        value: 86.8,
      },
      diameter: {
        name: "Diameter (km)",
        value: 51118,
      },
      density: {
        name: "Density (kg/m^3)",
        value: 1270,
      },
      surface_gravity: {
        name: "Surface Gravity(m/s^2)",
        value: 8.7,
      },
      escape_velocity: {
        name: "Escape Velocity (km/s)",
        value: 21.3,
      },
      rotation_period: {
        name: "Rotation Period (hours)",
        value: 17.2,
      },
      length_of_day: {
        name: "Length of Day (hours)",
        value: 17.2,
      },
      distance_from_sun: {
        name: "Distance from Sun (10^6 km)",
        value: 2867,
      },
      perihelion: {
        name: "Perihelion (10^6 km)",
        value: 2732.7,
      },
      aphelion: {
        name: "Aphelion (10^6 km)",
        value: 3001.4,
      },
      orbital_period: {
        name: "Orbital Period (days)",
        value: 30589,
      },
      orbital_velocity: {
        name: "Orbital Velocity (km/s)",
        value: 6.8,
      },
      orbital_inclination: {
        name: "Orbital Inclination (degrees)",
        value: 0.8,
      },
      orbital_eccentricity: {
        name: "Orbital Eccentricity",
        value: 0.047,
      },
      obliquity_to_orbit: {
        name: "Obliquity to Orbit (degrees)",
        value: 97.8,
      },
      mean_temperature: {
        name: "Mean Temperature (C)",
        value: -195,
      },
      surface_pressure: {
        name: "Surface Pressure (bars)",
        value: "Unknown",
      },
      number_of_moons: {
        name: "Number of Moons",
        value: 27,
      },
      ring_system: {
        name: "Ring System?",
        value: "Yes",
      },
      global_magnetic_field: {
        name: "Global Magnetic Field?",
        value: "Yes",
      },
    },
  },
  {
    id: 8,
    slug: "neptune",
    name: "Neptune",
    type: "Gas",
    info: {
      planet: {
        name: "Planet",
        value: "Neptune",
      },
      color: {
        name: "Color",
        value: "Blue",
      },
      mass: {
        name: "Mass (10^24kg)",
        value: 102,
      },
      diameter: {
        name: "Diameter (km)",
        value: 49528,
      },
      density: {
        name: "Density (kg/m^3)",
        value: 1638,
      },
      surface_gravity: {
        name: "Surface Gravity(m/s^2)",
        value: 11,
      },
      escape_velocity: {
        name: "Escape Velocity (km/s)",
        value: 23.5,
      },
      rotation_period: {
        name: "Rotation Period (hours)",
        value: 16.1,
      },
      length_of_day: {
        name: "Length of Day (hours)",
        value: 16.1,
      },
      distance_from_sun: {
        name: "Distance from Sun (10^6 km)",
        value: 4515,
      },
      perihelion: {
        name: "Perihelion (10^6 km)",
        value: 4471.1,
      },
      aphelion: {
        name: "Aphelion (10^6 km)",
        value: 4558.9,
      },
      orbital_period: {
        name: "Orbital Period (days)",
        value: 59800,
      },
      orbital_velocity: {
        name: "Orbital Velocity (km/s)",
        value: 5.4,
      },
      orbital_inclination: {
        name: "Orbital Inclination (degrees)",
        value: 1.8,
      },
      orbital_eccentricity: {
        name: "Orbital Eccentricity",
        value: 0.01,
      },
      obliquity_to_orbit: {
        name: "Obliquity to Orbit (degrees)",
        value: 28.3,
      },
      mean_temperature: {
        name: "Mean Temperature (C)",
        value: -200,
      },
      surface_pressure: {
        name: "Surface Pressure (bars)",
        value: "Unknown",
      },
      number_of_moons: {
        name: "Number of Moons",
        value: 14,
      },
      ring_system: {
        name: "Ring System?",
        value: "Yes",
      },
      global_magnetic_field: {
        name: "Global Magnetic Field?",
        value: "Yes",
      },
    },
  },
];

export default planets;
