
$(document).ready(function(){
    
        let backClick = 'page1';
        $('nave').load('nave.html', function() {
            $('#' + backClick).addClass('active');
            $('nave ul li').click(function(){
               if($(this).attr('id') !== backClick){
                   $(this).addClass('active');
                   $('#' + backClick).removeClass('active');
                   backClick = $(this).attr('id');
                   $('section').load(backClick + '.html',function() {
                        
                       
                       switch (backClick){
                            
                            case 'page1' :
                               
                                $('#contenu1').hide() ;
                                $('#resume').hide() ;
                                $('#contenu1').fadeIn(2000);
                                $('#resume').fadeIn(4000);
                               
                                
                                break;
                            
                            case 'page2' :
                                
                               /* Barre 1 */
                                let i = 0;
                                function bar1() {     
                                    if(i<=65){
                                        document.querySelector('#bar1').style = 'width: ' + i + '%';
                                        i+=0.1;
                                        requestAnimationFrame(bar1);
                                    }
                                }
                                requestAnimationFrame(bar1)
                               i = 0;
                               function bar2() {     
                                    if(i<=50){
                                        document.querySelector('#bar2').style = 'width: ' + i + '%';
                                        i+=0.1;
                                        requestAnimationFrame(bar2);
                                    }
                                }
                                requestAnimationFrame(bar2)
                                i = 0;
                               function bar3() {     
                                    if(i<=90){
                                        document.querySelector('#bar3').style = 'width: ' + i + '%';
                                        i+=0.1;
                                        requestAnimationFrame(bar3);
                                    }
                                }
                                requestAnimationFrame(bar3)
                                i = 0;
                               function bar4() {     
                                    if(i<=70){
                                        document.querySelector('#bar4').style = 'width: ' + i + '%';
                                        i+=0.1;
                                        requestAnimationFrame(bar4);
                                    }
                                }
                                requestAnimationFrame(bar4)
                                i = 0;
                               function bar5() {     
                                    if(i<=70){
                                        document.querySelector('#bar5').style = 'width: ' + i + '%';
                                        i+=0.1;
                                        requestAnimationFrame(bar5);
                                    }
                                }
                                requestAnimationFrame(bar5)
                                i = 0;
                               function bar6() {     
                                    if(i<=85){
                                        document.querySelector('#bar6').style = 'width: ' + i + '%';
                                        i+=0.1;
                                        requestAnimationFrame(bar6);
                                    }
                                }
                                requestAnimationFrame(bar6)
                                i = 0;
                               function bar7() {     
                                    if(i<=50){
                                        document.querySelector('#bar7').style = 'width: ' + i + '%';
                                        i+=0.1;
                                        requestAnimationFrame(bar7);
                                    }
                                }
                                requestAnimationFrame(bar7)
    
                                i = 0;
                               function bar8() {     
                                    if(i<=65){
                                        document.querySelector('#bar8').style = 'width: ' + i + '%';
                                        i+=0.1;
                                        requestAnimationFrame(bar8);
                                    }
                                }
                                requestAnimationFrame(bar8)
                                
                                i = 0;
                               function bar9() {     
                                    if(i<=90){
                                        document.querySelector('#bar9').style = 'width: ' + i + '%';
                                        i+=0.1;
                                        requestAnimationFrame(bar9);
                                    }
                                }
                                requestAnimationFrame(bar9)
                                
                                i = 0;
                               function bar0() {     
                                    if(i<=100){
                                        document.querySelector('#bar0').style = 'width: ' + i + '%';
                                        i+=0.1;
                                        requestAnimationFrame(bar0);
                                    }
                                }
                                requestAnimationFrame(bar0)
                               break;
                               
                               
                            case 'page3' :
                               let F = 1;
                               $('#formation1').hide();
                               $('#formation1').fadeIn(500);
                               $('#formation2').hide();
                               $('#formation3').hide();
                               $('#formation4').hide();
                               $('#formation5').hide();
                               $('#suivant').on('click', function(){
                                    F += 1;
                                   console.log(F);
                                    switch (F){
                                    
                                        case 2:
                                            $('#formation1').hide();
                                            $('#formation2').fadeIn(500);
                                            break;
                                        
                                        case 3:
                                            $('#formation2').hide();
                                            $('#formation3').fadeIn(500);
                                            break;
                                            
                                        case 4:
                                            $('#formation3').hide();
                                            $('#formation4').fadeIn(500);
                                            break;
                                            
                                        case 5:
                                            $('#formation4').hide();
                                            $('#formation5').fadeIn(500);
                                            break;
                                        case 6:
                                            F=1;
                                            $('#formation5').hide();
                                            $('#formation1').fadeIn(500);
                                            break;
                                    }
                               });
                               
                               
                               $('#precedent').on('click',function(){          
                                    F -=1 ;
                                   console.log(F);
                                    switch (F){
                                            
                                        case 4:
                                            $('#formation5').hide();
                                            $('#formation4').fadeIn(500);
                                            break;
                                        case 3:
                                            $('#formation4').hide();
                                            $('#formation3').fadeIn(500);
                                            break;
                                        case 2:
                                            $('#formation3').hide();
                                            $('#formation2').fadeIn(500);
                                            break;
                                        case 1:
                                            $('#formation2').hide();
                                            $('#formation1').fadeIn(500);
                                            break;
                                        case 0:
                                            F=5;
                                            $('#formation1').hide();
                                            $('#formation5').fadeIn(500);
                                            break;
                                    }
                               });
                               break;
                               
                               
                                
                            case 'page4' :
                                let L = 0 , R = parseInt(window.innerWidth) ;
                                gauche4 = document.querySelector('#gauche4');
                                droite4 = document.querySelector('#droite4')
                                gauche4.style.position = 'absolute';
                                gauche4.style.left = '-250px';
                                droite4.style.position = 'absolute';
                                droite4.style.right ='-250px' ;
                                 
                                function deplacement(){
                                    if(parseInt(gauche4.style.left) < 100+R/2 ){
                                        let g = parseInt(gauche4.style.left);
                                        g +=30;
                                        gauche4.style.left = g + 'px';
                                        droite4.style.right = g + 'px';
                                        requestAnimationFrame(deplacement);
                                    }
                                }
                               
                                    requestAnimationFrame(deplacement);

                                break;
                                
                                
                            
                        } 
                    });
                } 
            });
        });
        $('section').load(backClick + '.html', function(){
            $('#contenu1').hide() ;
            $('#resume').hide() ;
            $('#contenu1').fadeIn(5000);
            $('#resume').fadeIn(8000);
        });
});

