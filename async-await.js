// async-await.js
async function myFunction() {
    const condition = true; // Change to false to test rejection path
    
    const myPromise = new Promise((resolve, reject) => {
      if (condition) {
        resolve('Success with async/await!');
      } else {
        reject('Failure with async/await!');
      }
    });
  
    try {
      const result = await myPromise;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  
  myFunction();