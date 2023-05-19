export interface PlanetInterface {
  id: number;
  slug: string;
  name: string;
  type: string;
  info: {
    planet: infoObjectInterface;
    color: infoObjectInterface;
    mass: infoObjectInterface;
    diameter: infoObjectInterface;
    density: infoObjectInterface;
    surface_gravity: infoObjectInterface;
    escape_velocity: infoObjectInterface;
    rotation_period: infoObjectInterface;
    length_of_day: infoObjectInterface;
    distance_from_sun: infoObjectInterface;
    perihelion: infoObjectInterface;
    aphelion: infoObjectInterface;
    orbital_period: infoObjectInterface;
    orbital_velocity: infoObjectInterface;
    orbital_inclination: infoObjectInterface;
    orbital_eccentricity: infoObjectInterface;
    obliquity_to_orbit: infoObjectInterface;
    mean_temperature: infoObjectInterface;
    surface_pressure: infoObjectInterface;
    number_of_moons: infoObjectInterface;
    ring_system: infoObjectInterface;
    global_magnetic_field: infoObjectInterface;
  }
}

export interface infoObjectInterface {
  name: string;
  value: any;
}

