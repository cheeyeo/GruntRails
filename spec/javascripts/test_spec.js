describe('Test Karma:', function() {
  it('Checks that it works!', function(){
    expect(1).toEqual(1);
  });

  it('Checks that it can find jquery', function(){
    expect(typeof jQuery).toBe('function');
  });
});
