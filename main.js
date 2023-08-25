
const blurHandler = (index) => {
    const emailInput = document.getElementById("email");
    const errorElement = document.getElementById("eml");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add('active')
        if (emailInput.value.length === 0) {
            errorElement.innerText = 'This field is required';
            index = false;

        } else {
            errorElement.innerText = "Valid email required";
            index = false
        }
    } else {
        emailInput.classList.remove('active')
        errorElement.innerText = "";
      index = true
    }

};
const blurHandlerTwo = (index) => {
    const nameInput = document.getElementById("name");
    const errorElement = document.getElementById("nme");
    const namePattern = /^[A-Za-z\s'-]{3,}$/;
    if (!namePattern.test(nameInput.value)) {
        nameInput.classList.add('active');
       
        if (nameInput.value.length === 0) {
            errorElement.innerText = 'This field is required';
            index = false
           
        } else {
            errorElement.innerText = "Valid name required";
            index = false
        }
    } else {
        errorElement.innerText = "";
        nameInput.classList.remove('active')
       index = true
    }
}
const blurHandlerThree = (index) => {
    
    const nameInput = document.getElementById("phone");
    const errorElement = document.getElementById("pne");
    const namePattern = /^\d{1,15}$/;
    if (!namePattern.test(nameInput.value)) {
        nameInput.classList.add('active');

       index = false
        if (nameInput.value.length === 0) {
            errorElement.innerText = 'This field is required';
            
        } else {
            errorElement.innerText = "Valid number required";
        }
    } else {
        errorElement.innerText = "";
        nameInput.classList.remove('active')
       index = true
    }
}

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const form1 = document.getElementById('form1');

const sub1 = document.getElementById('sub1');
const subHandler = (e) => {
    const plan = document.getElementById('plan');
    e.preventDefault()
    let a = false;
    let b = false;
    let c = false;
    // blurHandler(a);
    // blurHandlerTwo(b);
    // blurHandlerThree(c);
    const emailInput = document.getElementById("email");
    const errorElement = document.getElementById("eml");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.toggle('active')
        if (emailInput.value.length === 0) {
            errorElement.innerText = 'This field is required';
            a = false

        } else {
            errorElement.innerText = "Valid email required";
            a = false
        }
    } else {
        emailInput.classList.remove('active')
        errorElement.innerText = "";
        a = true
    }
    const nameInput = document.getElementById("name");
    const errorElement2 = document.getElementById("nme");
    const namePattern = /^[A-Za-z\s'-]{3,}$/;
    if (!namePattern.test(nameInput.value)) {
        nameInput.classList.toggle('active');

        if (nameInput.value.length === 0) {
            errorElement2.innerText = 'This field is required';
            b = false
        } else {
            errorElement2.innerText = "Valid name required";
            b = false
        }
    } else {
        errorElement2.innerText = "";
        b = true
    }
    const phoneInput = document.getElementById("phone");
    const errorElement3 = document.getElementById("pne");
    const phonePattern = /^\d{1,15}$/;
    if (!phonePattern.test(phoneInput.value)) {
        nameInput.classList.toggle('active');


        if (phoneInput.value.length === 0) {
            errorElement3.innerText = 'This field is required';
            c = false
        } else {
            errorElement3.innerText = "Valid number required";
            c = false
        }
    } else {
        errorElement3.innerText = "";
        c = true
    }
    if(a && b && c){
        form1.classList.add('active');
        one.classList.add('active');
        two.classList.add('active');
        plan.classList.add('active');
        form1.classList.remove('act2')


    } else {
        alert('required')
        
  }
}
const back1 = () => {
    // alert('boy')
    const plan = document.getElementById('plan');
    form1.classList.remove('active');
    one.classList.remove('active');
    // one.classList.add('act2');
    two.classList.remove('active');
    plan.classList.remove('active')
    form1.classList.add('act2');
    plan.classList.add('act3')
    
}

form1.addEventListener('submit', subHandler )
let ar = false;
let ad = '';
let pr ;
const plansHandler = (param, p2, p3) => {
    
   const div = document.getElementById(param);
   const pp2 = document.getElementById(p2);
    const pp3 = document.getElementById(p3);
    const dh3 = document.getElementById('ar');
    const ball = document.getElementById('ttm');
    const dh = document.getElementById('dh4');
   pr = param
    div.classList.toggle('active');
    // if (pp2.classList.contains('active')) {
        pp2.classList.remove('active')
    // }
    // if (pp3.classList.contains('active')) {
    pp3.classList.remove('active');
    // }\ 
    if (param === 'arcade') {
        ad = 'arcade';
        dh3.innerText = ' Arcade';
       
    } else if (param === 'advanced') {
        ad = 'advanced';
        dh3.innerText = ' Advanced';
        
    } else {
        ad = 'pro'
        dh3.innerText = ' Pro';
       
    }
    if (param === 'arcade' || param === 'advanced' || param === 'pro') {
        ar = true
    } 
    
    console.log(ad);
}
let ol = 0;
let ls = 0;
let cs = 0;
let ca = false;
let cb = false;
let cc = false;
let tm = 'mo';
const myHandler = () => {
    // alert('boy')
    const ball = document.getElementById('ttm');
    const free = document.getElementById('free');
    const free2 = document.getElementById('free2');
    const free3 = document.getElementById('free3');
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    const m1 = document.getElementById('m1');
    const m2 = document.getElementById('m2');
    const m3 = document.getElementById('m3');
    const d2h61 = document.getElementById('d2h61');
    const d2p2 = document.getElementById('d2h62');
    const d2h63 = document.getElementById('d2h63');
    const summMy = document.getElementById('summ-my');
    free.classList.toggle('active');
    free2.classList.toggle('active');
    free3.classList.toggle('active');
    ball.classList.toggle('active');
    if (ball.classList.contains("active")) { 
        m1.innerText = '+$10/yr';
        m2.innerText = '+$20/yr';
        m3.innerText = '+$20/yr';
        d2h61.innerText = '+$10/yr';
        ca = true;
        cb = true;
        cc = true;
        tm = 'yr';
        d2p2.innerText = '+$20/yr';
        d2h63.innerText = '+$20/yr';
        p1.innerText = '$90/yr';
        p2.innerText = '$120/yr';
        p3.innerText = '$150/yr';
        summMy.innerText = '(yearly)'
    } else {
        p1.innerText = '$9/mo';
        p2.innerText = '$12/mo';
        p3.innerText = '$15/mo';
        m1.innerText = '+$1/mo';
        m2.innerText = '+$2/mo';
        m3.innerText = '+$2/mo';
        ca = false;
        cb = false;
        cc = false;
        tm = 'mo';
        d2h61.innerText = '+$1/mo';
        d2p2.innerText = '+$2/mo';
        d2h63.innerText = '+$2/mo';
        summMy.innerText = '(monthly)'
    }
    
}
let pls;
const nextOneHandler = () => {
    const addOn = document.getElementById('addon');
    const plan = document.getElementById('plan');
    const dh = document.getElementById('dh4');
    const ball = document.getElementById('ttm');
    
    if (ball.classList.contains('active')) {
        ol = 10;
        ls = 20;
        cs = 20;
    } else {
        ol = 1;
        ls = 2;
        cs = 2;
    }
    
    if (pr === 'arcade') {
        if (ball.classList.contains('active')) {
            dh.innerText = '$90/yr';
            pls = 90;
        } else {
            dh.innerText = '$9/mo';
            pls = 9;

        }
    } else if (pr === 'advanced') {
        if (ball.classList.contains('active')) {
            dh.innerText = '$120/yr';
            pls = 120;
        } else {
            dh.innerText = '$12/mo';
            pls = 12;
        }
    } else {
        if (ball.classList.contains('active')) {
            dh.innerText = '$150/yr';
            pls = 150;
        } else {
            dh.innerText = '$15/mo';
            pls = 15
        }
    }
   
    if (ar) {
        two.classList.remove('active');
        three.classList.add('active');
        addOn.classList.add('active')
        plan.classList.remove('active');
        plan.classList.add('act2')
    } else {
        alert('Pick a plan')
    }

    // console.log(ttl);
}
const onlineS = document.getElementById('online-s');
const largerS = document.getElementById('Larger-s');
const customP = document.getElementById('custom-p');
onlineS.style.display = 'none';
largerS.style.display = 'none';
customP.style.display = 'none';
let addA = false;
let addB = false;
let addC = false;
const addHandler = (param, p2) => {
    const checks = document.getElementById(param);
    const pp2 = document.getElementById(p2);
    const total = document.getElementById('total');
   
    checks.classList.toggle('active');
    if (param === 'check1') {
        onlineS.style.display = checks.classList.contains('active') ? 'flex' : 'none';
        if (onlineS.style.display === 'flex') {
            addA = true
        } else {
        addA = false
      }
        
        
    } else if (param === 'check2') {
        largerS.style.display = checks.classList.contains('active') ? 'flex' : 'none';
       
        if (largerS.style.display === 'flex') {
            addB = true
        } else {
            addB = false
        }
    } else if (param === 'check3') {
        customP.style.display = checks.classList.contains('active') ? 'flex' : 'none';
        if (customP.style.display === 'flex') {
            addC = true
        } else {
            addC = false
        }
    }

    pp2.checked = !pp2.checked;
  
    
}
const nextTwoHandler = () => {
    // alert('boy')
    const addOn = document.getElementById('addon');
    const inp1 = document.getElementById('check1');
    const inp2 = document.getElementById('check2');
    const inp3 = document.getElementById('check3');
    const summary = document.getElementById('summary');
    const total = document.getElementById('total');
    const totalol = addA ? ol : 0;
    const totalls = addB ? ls : 0;
    const totalcs = addC ? cs : 0;
    const ttl = totalcs + totalls + totalol + pls;
    total.innerText = `$${ttl}/${tm}`;
    // total.innerText = `$${ttl}/mo`;
    if (inp1.classList.contains('active') || inp2.classList.contains('active') || inp3.classList.contains('active')) {
       
        three.classList.remove('active');
        four.classList.add('active');
        addOn.classList.remove('active');
        addOn.classList.add('act2');
        summary.classList.add('active')

    } else {
        alert('pick an add on')
    }
    console.log(addA, addB, addC);
}
const back2 = () => {
    const addOn = document.getElementById('addon');
    const plan = document.getElementById('plan');

    plan.classList.add('active');
    addOn.classList.add('act3');
    addOn.classList.remove('active');
    three.classList.remove('active');
    two.classList.add('active');
    four.classList.remove('active')
}
const back3 = () => {
    const addOn = document.getElementById('addon');
    const summary = document.getElementById('summary');

    addOn.classList.add('active');
    summary.classList.remove('active');
    summary.classList.add('act3');
    one.classList.add('active');
    two.classList.remove('active');
    three.classList.add('active');
    four.classList.remove('active');
}
const nextThreeHandler = () => {
    const summary = document.getElementById('summary');
    const success = document.getElementById('success');
    summary.classList.remove('active');
    summary.classList.add('act2');
    success.classList.add('active');
    // alert('success')
}
const changeHandler = () => {
    const plan = document.getElementById('plan');
    const summary = document.getElementById('summary');
    plan.classList.add('active');
    summary.classList.remove('active');
    summary.classList.add('act2');
    one.classList.add('active');
    two.classList.add('active');
    three.classList.remove('active');
    four.classList.remove('active');
}