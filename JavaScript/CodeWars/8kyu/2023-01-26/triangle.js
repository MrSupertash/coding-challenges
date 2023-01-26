// Instructions

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// Prep: sum of inner degrees of a triangle is 180. The third angle can be calculated by subtracting the known two from 180


const otherAngle = (a, b) => 180 - a - b;