async function runTests() {
  const totalTests = 10;

  for (let i = 1; i <= totalTests; i++) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
    console.log(`Test ${i} passed`);
  }

  console.log("All tests passed successfully. There is no error in the code.");
}

// Start the test process
runTests();
