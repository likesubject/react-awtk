import "../target1"

describe("test target1", ()=>{

  it("toMatchSnapshot", ()=>{
    expect(__AwtkSnapshot).toMatchSnapshot()
  })
})

