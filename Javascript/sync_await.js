function runTest(name, delay) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(name);
			resolve(name);
		}, delay);
	});
}

function test1() {
	return runTest("test1", 200);
}

function test2() {
	return runTest("test2", 100);
}

function test3() {
	return runTest("test3", 300);
}

function test4() {
	return runTest("test4", 150);
}

async function runTests() {
	try {
		await test1();
		await test2();
		await test3();
		await test4();
		console.log("All tests completed!");
	} catch (error) {
		console.error("A test failed:", error);
	}
}

runTests();
