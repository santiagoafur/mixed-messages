const scientists = ['Isaac Newton', 'Carl Friedrich Gauss', 'Galileo Galilei', 'Nikola Tesla', 'Albert Einstein', 'Louis Pasteur', 'Nicolaus Copernicus', 'Charles Darwin', 'Niels Bohr', 'René Descartes', 'Antoine Lavoisier', 'Pierre-Simon Laplace'];

const discoveries = ['discovered forces, and specifically the development of a universal law of gravitation and his laws of motion', 'developed number theory, geometry, probability theory, geodesy, planetary astronomy, the theory of functions, and potential theory (including electromagnetism)', 'pioneered the use of the telescope for observing the night sky. His discoveries undermined traditional ideas about a perfect and unchanging cosmos with the Earth at its centre', 'invented the first alternating current (AC) motor and developed AC generation and transmission technology', 'developed the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics', 'discovered the principles of vaccination, microbial fermentation and pasteurization', 'proposed that Earth and other planets revolve around the sun, the heliocentric theory of the solar system', 'presented the theory of natural selection, which explains how genetic traits of a species may change over time. This may lead to speciation, the formation of a distinct new species', 'proposed a model of the atom in which the electron was able to occupy only certain orbits around the nucleus', 'is most commonly known for his philosophical statement, “I think, therefore I am” (originally in French, but best known by its Latin translation: "Cogito, ergo sum”)', 'established the law of conservation of mass, determined that combustion and respiration are caused by chemical reactions with what he named “oxygen,” and helped systematize chemical nomenclature, among many other accomplishments', 'announced the invariability of planetary mean motions (average angular velocity)'];

const year = [1727, 1855, 1564, 1922, 1955, 1895, 1543, 1882, 1962, 1650, 1794, 1773];

// picks a random array item:
const pickRandom = array => {
    return array[Math.floor(Math.random() * array.length)];
}

// puts random items of the different arrays together:
const mixedMessage = () => {
    console.log(`In ${pickRandom(year)}, ${pickRandom(scientists)} ${pickRandom(discoveries)}, considered one of the greatest breakthroughs of the humanity.`);
}

mixedMessage();