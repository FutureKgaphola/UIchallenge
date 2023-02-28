window.onload=()=>{
    set_UI_Text();
    set_footer_Text();
}

var set_UI_Text=()=>
{
    document.getElementById('h2_1id').innerHTML="Join our community";
    document.getElementById('h2_2id').innerHTML="30-day, hassle-free money back guarantee";
    document.getElementById('p_1id').innerHTML=`Gain access to our full library of tutorials along with expert code reviews.<br>
    Perfect for any developers who are serious about honing their skills.`;
    document.getElementById('h2_3id').innerHTML="Monthly Subscription";
    document.getElementById('h1_1id').innerHTML="&dollar;29";
    document.getElementById('p_2id').innerHTML="per month";
    document.getElementById('p_3id').innerHTML="Full access for less than &dollar;1 a day";
    document.getElementById('btnSignupid').innerHTML="Sign Up";
    document.getElementById('h2_4id').innerHTML="Why Us";
    document.getElementById('p_4id').innerHTML=`Gain access to our full library of tutorials along with expert code reviews. 
    Tutorials by industry experts<br>
    Peer &amp; expert code review<br>
    Coding exercises<br>
    Access to our GitHub repos<br>
    Community forum<br>
    Flashcard decks<br>
    New videos every week`;
}
var set_footer_Text=()=>
{
    let ach= document.getElementById('ach');
    ach.innerHTML='Bokamoso Future Kgaphola';
    ach.href='https://futurekgaphola.github.io/Introduction-To-HTML---Task-1/';
}