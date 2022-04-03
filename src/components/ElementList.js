// elemSymbol, elemName, period, group, atomicNumber, valenceElectrons, block, electronegativity
const elements = [
    ["H", "Hydrogen", 1, 1, 1, 1, "s", 2.2],
    ["He", "Helium", 1, 18, 2, 2, "s", 0],
    ["Li", "Lithium", 2, 1, 3, 1, "s", 0.98],
    ["Be", "Beryllium", 2, 2, 4, 2, "s", 1.57],
    ["B", "Boron", 2, 13, 5, 3, "p", 2.04],
    ["C", "Carbon", 2, 14, 6, 4, "p", 2.55],
    ["N", "Nitrogen", 2, 15, 7, 5, "p", 3.04],
    ["O", "Oxygen", 2, 16, 8, 6, "p", 3.44],
    ["F", "Fluorine", 2, 17, 9, 7, "p", 3.98],
    ["Ne", "Neon", 2, 18, 10, 8, "p", 0],
    ["Na", "Sodium", 3, 1, 11, 1, "s", 0.93],
    ["Mg", "Magnesium", 3, 2, 12, 2, "s", 1.31],
    ["Al", "Aluminium", 3, 13, 13, 3, "p", 1.61],
    ["Si", "Silicon", 3, 14, 14, 4, "p", 1.9],
    ["P", "Phosphorus", 3, 15, 15, 5, "p", 2.19],
    ["S", "Sulfur", 3, 16, 16, 6, "p", 2.58],
    ["Cl", "Chlorine", 3, 17, 17, 7, "p", 3.16],
    ["Ar", "Argon", 3, 18, 18, 8, "p", 0],
    ["K", "Potassium", 4, 1, 19, 1, "s", 0.82],
    ["Ca", "Calcium", 4, 2, 20, 2, "s", 1],
    ["Sc", "Scandium", 4, 3, 21, 2, "d", 1.36],
    ["Ti", "Titanium", 4, 4, 22, 2, "d", 1.54],
    ["V", "Vanadium", 4, 5, 23, 2, "d", 1.63],
    ["Cr", "Chromium", 4, 6, 24, 1, "d", 1.66],
    ["Mn", "Manganese", 4, 7, 25, 2, "d", 1.55],
    ["Fe", "Iron", 4, 8, 26, 2, "d", 1.83],
    ["Co", "Cobalt", 4, 9, 27, 2, "d", 1.88],
    ["Ni", "Nickel", 4, 10, 28, 2, "d", 1.91],
    ["Cu", "Copper", 4, 11, 29, 1, "d", 1.9],
    ["Zn", "Zinc", 4, 12, 30, 2, "d", 1.65],
    ["Ga", "Gallium", 4, 13, 31, 3, "p", 1.81],
    ["Ge", "Germanium", 4, 14, 32, 4, "p", 2.01],
    ["As", "Arsenic", 4, 15, 33, 5, "p", 2.18],
    ["Se", "Selenium", 4, 16, 34, 6, "p", 2.55],
    ["Br", "Bromine", 4, 17, 35, 7, "p", 2.96],
    ["Kr", "Krypton", 4, 18, 36, 8, "p", 3],
    ["Rb", "Rubidium", 5, 1, 37, 1, "s", 0.82],
    ["Sr", "Strontium", 5, 2, 38, 2, "s", 0.95],
    ["Y", "Yttrium", 5, 3, 39, 2, "d", 1.22],
    ["Zr", "Zirconium", 5, 4, 40, 2, "d", 1.33],
    ["Nb", "Niobium", 5, 5, 41, 1, "d", 1.6],
    ["Mo", "Molybdenum", 5, 6, 42, 1, "d", 2.16],
    ["Tc", "Technetium", 5, 7, 43, 1, "d", 1.9],
    ["Ru", "Ruthenium", 5, 8, 44, 1, "d", 2.2],
    ["Rh", "Rhodium", 5, 9, 45, 1, "d", 2.28],
    ["Pd", "Palladium", 5, 10, 46, 0, "d", 2.2],
    ["Ag", "Silver", 5, 11, 47, 1, "d", 1.93],
    ["Cd", "Cadmium", 5, 12, 48, 2, "d", 1.69],
    ["In", "Indium", 5, 13, 49, 3, "p", 1.78],
    ["Sn", "Tin", 5, 14, 50, 4, "p", 1.96],
    ["Sb", "Antimony", 5, 15, 51, 5, "p", 2.05],
    ["Te", "Tellurium", 5, 16, 52, 6, "p", 2.1],
    ["I", "Iodine", 5, 17, 53, 7, "p", 2.66],
    ["Xe", "Xenon", 5, 18, 54, 8, "p", 2.6],
    ["Cs", "Caesium", 6, 1, 55, 1, "s", 0.79],
    ["Ba", "Barium", 6, 2, 56, 2, "s", 0.89],
    ["La", "Lanthanum", 6, 0, 57, 2, "f", 1.1],
    ["Ce", "Cerium", 6, 0, 58, 2, "f", 1.12],
    ["Pr", "Praseodymium", 6, 0, 59, 2, "f", 1.13],
    ["Nd", "Neodymium", 6, 0, 60, 2, "f", 1.14],
    ["Pm", "Promethium", 6, 0, 61, 2, "f", 1.13],
    ["Sm", "Samarium", 6, 0, 62, 2, "f", 1.17],
    ["Eu", "Europium", 6, 0, 63, 2, "f", 1.2],
    ["Gd", "Gadolinium", 6, 0, 64, 2, "f", 1.2],
    ["Tb", "Terbium", 6, 0, 65, 2, "f", 1.22],
    ["Dy", "Dysprosium", 6, 0, 66, 2, "f", 1.23],
    ["Ho", "Holmium", 6, 0, 67, 2, "f", 1.24],
    ["Er", "Erbium", 6, 0, 68, 2, "f", 1.24],
    ["Tm", "Thulium", 6, 0, 69, 2, "f", 1.25],
    ["Yb", "Ytterbium", 6, 0, 70, 2, "f", 1.1],
    ["Lu", "Lutetium", 6, 3, 71, 2, "d", 1.27],
    ["Hf", "Hafnium", 6, 4, 72, 2, "d", 1.3],
    ["Ta", "Tantalum", 6, 5, 73, 2, "d", 1.5],
    ["W", "Tungsten", 6, 6, 74, 2, "d", 2.36],
    ["Re", "Rhenium", 6, 7, 75, 2, "d", 1.9],
    ["Os", "Osmium", 6, 8, 76, 2, "d", 2.2],
    ["Ir", "Iridium", 6, 9, 77, 2, "d", 2.2],
    ["Pt", "Platinum", 6, 10, 78, 1, "d", 2.28],
    ["Au", "Gold", 6, 11, 79, 1, "d", 2.54],
    ["Hg", "Mercury", 6, 12, 80, 2, "d", 2],
    ["Tl", "Thallium", 6, 13, 81, 3, "p", 1.62],
    ["Pb", "Lead", 6, 14, 82, 4, "p", 2.33],
    ["Bi", "Bismuth", 6, 15, 83, 5, "p", 2.02],
    ["Po", "Polonium", 6, 16, 84, 6, "p", 2],
    ["At", "Astatine", 6, 17, 85, 7, "p", 2.2],
    ["Rn", "Radon", 6, 18, 86, 8, "p", 0],
    ["Fr", "Francium", 7, 1, 87, 1, "s", 0.7],
    ["Ra", "Radium", 7, 2, 88, 2, "s", 0.89],
    ["Ac", "Actinium", 7, 0, 89, 2, "f", 1.1],
    ["Th", "Thorium", 7, 0, 90, 2, "f", 1.3],
    ["Pa", "Protactinium", 7, 0, 91, 2, "f", 1.5],
    ["U", "Uranium", 7, 0, 92, 2, "f", 1.38],
    ["Np", "Neptunium", 7, 0, 93, 2, "f", 1.36],
    ["Pu", "Plutonium", 7, 0, 94, 2, "f", 1.28],
    ["Am", "Americium", 7, 0, 95, 2, "f", 1.3],
    ["Cm", "Curium", 7, 0, 96, 2, "f", 1.3],
    ["Bk", "Berkelium", 7, 0, 97, 2, "f", 1.3],
    ["Cf", "Californium", 7, 0, 98, 2, "f", 1.3],
    ["Es", "Einsteinium", 7, 0, 99, 2, "f", 1.3],
    ["Fm", "Fermium", 7, 0, 100, 2, "f", 1.3],
    ["Md", "Mendelevium", 7, 0, 101, 2, "f", 1.3],
    ["No", "Nobelium", 7, 0, 102, 2, "f", 1.3],
    ["Lr", "Lawrencium", 7, 3, 103, 3, "d", 0],
    ["Rf", "Rutherfordium", 7, 4, 104, 2, "d", 0],
    ["Db", "Dubnium", 7, 5, 105, 2, "d", 0],
    ["Sg", "Seaborgium", 7, 6, 106, 2, "d", 0],
    ["Bh", "Bohrium", 7, 7, 107, 2, "d", 0],
    ["Hs", "Hassium", 7, 8, 108, 2, "d", 0],
    ["Mt", "Meitnerium", 7, 9, 109, 0, "d", 0],
    ["Ds", "Darmstadtium", 7, 10, 110, 0, "d", 0],
    ["Rg", "Roentgenium", 7, 11, 111, 0, "d", 0],
    ["Cn", "Copernicium", 7, 12, 112, 0, "d", 0],
    ["Nh", "Nihonium", 7, 13, 113, 0, "p", 0],
    ["Fl", "Flerovium", 7, 14, 114, 0, "p", 0],
    ["Mc", "Moscovium", 7, 15, 115, 0, "p", 0],
    ["Lv", "Livermorium", 7, 16, 116, 0, "p", 0],
    ["Ts", "Tennessine", 7, 17, 117, 0, "p", 0],
    ["Og", "Oganesson", 7, 18, 118, 0, "p", 0]
];

export default elements;
