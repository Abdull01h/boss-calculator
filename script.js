body{
  margin:0;
  font-family:sans-serif;
  background:#0a0a0a;
  color:#fff;
  overflow-x:hidden;
}

.hidden{display:none;}

#loading{
  position:fixed; inset:0;
  background:#000;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.loader{
  border:6px solid #222;
  border-top:6px solid cyan;
  width:60px;height:60px;
  border-radius:50%;
  animation:spin 1s linear infinite;
}

@keyframes spin{to{transform:rotate(360deg)}}

#loginPage{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.dev span{color:cyan;font-weight:bold;}
footer{margin-top:20px;color:#999;}

header{
  text-align:center;
}
header span{color:cyan;}
nav{
  display:flex;
  justify-content:space-around;
  margin:10px 0;
}
nav button{padding:5px;}

.calc{
  padding:10px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:5px;
}

.num{background:#333;}
.op{background:gold;}
.eq{background:green;}

button{
  padding:15px;
  border:none;
  color:white;
}

input{
  width:100%;
  padding:10px;
  margin-bottom:10px;
}
