// Promise APIs 

// --------------------------- 1-Promise.all()  ---> Wait for all to finish ------------------------------

// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 Success");
//         // reject("Promise 1 Fail");
//     },5000)
// })

// const pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 Success");
//         // reject("Promise 2 Fail");
//     },4000)
// })

// const pr3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 3 Success");
//         // reject("Promise 3 Fail");
//     },3000)
// })

// Promise.all([pr1,pr2,pr3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// ----------------------------------------------------

// If it get any one error immediately at that time only it will throw that error - it will not even wait for all to complete

// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 Success");
//         // reject("Promise 1 Fail");
//     },5000)
// })

// const pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 Success");
//         // reject("Promise 2 Fail");
//     },4000)
// })

// const pr3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("Promise 3 Success");
//         reject("Promise 3 Fail");
//     },2000)
// })

// Promise.all([pr1,pr2,pr3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// -------------------------------------------------------


// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("Promise 1 Success");
//         reject("Promise 1 Fail");
//     },5000)
// })

// const pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("Promise 2 Success");
//         reject("Promise 2 Fail");
//     },4000)
// })

// const pr3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("Promise 3 Success");
//         reject("Promise 3 Fail");
//     },2000)
// })

// Promise.all([pr1,pr2,pr3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// ------------------------------------- 2-Promise.allSettled() - Best ---------------------------------

// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 Success");
//         // reject("Promise 1 Fail");
//     },5000)
// })

// const pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 Success");
//         // reject("Promise 2 Fail");
//     },4000)
// })

// const pr3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 3 Success");
//         // reject("Promise 3 Fail");
//     },2000)
// })

// Promise.allSettled([pr1,pr2,pr3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// -------------------------------------------------------------


// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 Success");
//         // reject("Promise 1 Fail");
//     },5000)
// })

// const pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 Success");
//         // reject("Promise 2 Fail");
//     },4000)
// })

// const pr3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("Promise 3 Success");
//         reject("Promise 3 Fail");
//     },2000)
// })

// Promise.allSettled([pr1,pr2,pr3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// ------------------------------------- 3-Promise.race() ------------------------------------

// Promise who settled (resolve or reject whatever) first will be the winner

// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 Success");
//         // reject("Promise 1 Fail");
//     },5000)
// })

// const pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 Success");
//         // reject("Promise 2 Fail");
//     },4000)
// })

// const pr3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 3 Success");
//         // reject("Promise 3 Fail");
//     },2000)
// })

// Promise.race([pr1,pr2,pr3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })



// ---------------------------------------------------------------


// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 Success");
//         // reject("Promise 1 Fail");
//     },5000)
// })

// const pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 Success");
//         // reject("Promise 2 Fail");
//     },4000)
// })

// const pr3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("Promise 3 Success");
//         reject("Promise 3 Fail");
//     },2000)
// })

// Promise.race([pr1,pr2,pr3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })



// ------------------------------------- 4-Promise.any() ------------------------------------

// Promise who resolve first will be the winner


// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 Success");
//         // reject("Promise 1 Fail");
//     },5000)
// })

// const pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 Success");
//         // reject("Promise 2 Fail");
//     },4000)
// })

// const pr3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 3 Success");
//         // reject("Promise 3 Fail");
//     },2000)
// })

// Promise.any([pr1,pr2,pr3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// --------------------------------------------------------



// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 Success");
//         // reject("Promise 1 Fail");
//     },5000)
// })

// const pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 Success");
//         // reject("Promise 2 Fail");
//     },4000)
// })

// const pr3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("Promise 3 Success");
//         reject("Promise 3 Fail");
//     },2000)
// })

// Promise.any([pr1,pr2,pr3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })



// ---------------------------------------------------------

// AggregateError: All promises were rejected

const pr1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Promise 1 Success");
        reject("Promise 1 Fail");
    },5000)
})

const pr2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Promise 2 Success");
        reject("Promise 2 Fail");
    },4000)
})

const pr3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Promise 3 Success");
        reject("Promise 3 Fail");
    },2000)
})

Promise.any([pr1,pr2,pr3])
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
        console.log(err.errors);
    })