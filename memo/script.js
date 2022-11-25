document.querySelector('button').addEventListener('click', function(){
    
    let mInp = document.querySelector('input').value;
    let mLi = document.createElement('li');
    
    console.log(mInp);
    console.log(mLi);
    
    document.querySelector('ul').prepend(mLi);
    mLi.textContent = mInp;

})

