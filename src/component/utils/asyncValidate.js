const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000)
  .then(() => {
    if (['', ' '].includes(values.title)) {
      throw { title: 'Please provide a title' };
    }
  })
}

export default asyncValidate