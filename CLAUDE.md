# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository contains JavaScript koans - a series of exercises designed to teach JavaScript fundamentals through test-driven development. The koans progress through basic JavaScript concepts to functional programming patterns.

## How to Run

1. **Running the tests**: Open `ExerciseRunner.html` in a web browser to run the tests/koans.
   - The tests use the Jasmine testing framework.
   - Each koan will appear in red until the correct solution is provided.

## Codebase Structure

- **Main exercise files**: Numbered JS files (00-07) contain koans that need to be completed
  - `00-AboutExpects.js` - Introduction to Jasmine testing
  - `01-AboutPrimitives.js` - JavaScript primitive types
  - `02-AboutArrays.js` - Array operations
  - `03-AboutObjects.js` - Object syntax and behavior
  - `04-AboutFunctions.js` - Function declarations and behavior
  - `05-AboutFunctionalProgramming.js` - Functional programming patterns
  - `06-AboutThis.js` - JavaScript's `this` keyword
  - `07-FinalExam.js` - Comprehensive exercises combining concepts

- **Support files**:
  - `ExerciseRunner.html` - Main entry point to run tests in browser
  - `lib/FILL_ME_IN.js` - Contains the placeholder value that needs to be replaced
  - `lib/jasmine/` - Jasmine testing framework files
  - `reference-solution/` - Contains solutions to the more complex exercises

## Working with Koans

1. Start with the first file (`00-AboutExpects.js`) and work through each file in numerical order.
2. In each file, replace `FILL_ME_IN` with the correct value to make the test pass.
3. For function exercises, implement the function bodies where there are `FILL_ME_IN` comments.
4. Reference solutions are available in the `reference-solution/` directory for complex exercises.

## Development Pattern

The koans follow a test-driven development pattern:
1. Read the test to understand what functionality is expected
2. Replace `FILL_ME_IN` with the appropriate value or implement the requested function
3. Refresh `ExerciseRunner.html` to see if your solution passes
4. If not, revise your answer until the test passes
5. Move on to the next test

## Tips for Working with the Codebase

1. The koans cover JavaScript fundamentals through a progressive sequence of exercises.
2. Many exercises have multiple tests - all need to pass to complete the koan.
3. Pay attention to the test names and comments as they provide hints.
4. For functional programming exercises, refer to the Array method documentation on MDN.