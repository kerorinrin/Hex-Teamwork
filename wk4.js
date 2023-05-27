// 資料串接
const TableBody = document.querySelector('.table-group-divider');
const A2 = document.querySelector('#a2')

let schoolData=[];

function getData(){
    axios.get('https://soa.tainan.gov.tw/Api/Service/Get/b1054400-86a4-40fa-aea0-fb39fce361e2')
    .then(function(response){
        console.log(response.data.data);
        schoolData=response.data.data;

        renderData();
    })
}

getData();

// 作品渲染至畫面
function renderData(){ 
    let dataContent = '';   
    schoolData.forEach((item,index) => {
        dataContent += `<tr><th scope="row">${index+1}</th><td>${item.school}</td><td>${item.num}</td></tr>`
    });
    
    A2.innerHTML=`⇒　臺南市共有${schoolData.length}個國小，大甲國小有${getNumOfStudents('大甲')}位學生`
    TableBody.innerHTML=dataContent;
};

// 取得指定學校的學生人數
function getNumOfStudents(schoolName) {
    const school = schoolData.find(item => item.school.includes(schoolName));
    return school ? school.num : 0;
  }
