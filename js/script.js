         var banner
         var cover
         var description
         var name
         var game_url
	 var minecraft = document.getElementById('minecraft')
	 var slope = document.getElementById('Slope')
         var city_builder = document.getElementById('City_Builder');
	 var flappy2048 = document.getElementById('Flappy2048');
	 var BlockGame = document.getElementById('BlockGame');
         var ff = document.getElementById('FF');
         var fs = document.getElementById('FS');
         var hextris = document.getElementById('hextris');
         var game_2048 = document.getElementById('2048');
         var tetris = document.getElementById('tetris');
         var dino = document.getElementById('dino');
         var flappy = document.getElementById('flappy');
         var pacman = document.getElementById('pacman');
         var racer = document.getElementById('racer');
         var clicker = document.getElementById('clicker');
         var hit_target = document.getElementById('hit_target');
         var space_company = document.getElementById('space_company');
         var minecraft = document.getElementById('minecraft');
	 var suduko = document.getElementById('Sudoku');
         var lava = document.getElementById('lava');
         var play = document.getElementById('play_game_page')
         var main = document.getElementById('main_game_page')
         var coming_soon = document.getElementById('coming_soon_page')
         var back_arrow = document.getElementById('back_arrow')
         var play_game = document.getElementById('play_button');
         var game_select = document.getElementById('games_select');
         var users_select = document.getElementById('users_select');
         var chat_select = document.getElementById('chat_select');
         var chat_page = document.getElementById('chat_page');   
         
	 minecraft.style.cursor = 'pointer';
         minecraft.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/minecraft_banner.jpeg"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/minecraft_cover.jpeg"
           description = "xlegends got blocked so heres minecraft, an actually fun game u can play on amazing math!"
           name = "minecraft"
           game_url = "Projects/minecraft/index.html"
           set_properties(banner, cover, description, name)
         };
	       
	 slope.style.cursor = 'pointer';
         slope.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/slope_banner.png"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/slope_cover.jpg"
           description = "xlegends got blocked so heres slope, an actually fun game u can play on amazing math!"
           name = "Slope"
           game_url = "Projects/slope/index.html"
           set_properties(banner, cover, description, name)
         };
	       
	 flappy2048.style.cursor = 'pointer';
         flappy2048.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/2048_banner.jpeg"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/flappy2048_cover.png"
           description = "I found a game like this on a website so I just made my own clone because im bored i mean its only the second day of summer what am I exposed to do I have made 2 games already how many are we going to have by the end of the summer"
           name = "Flappy 2048"
           game_url = "Projects/Flappy2048/index.html"
           set_properties(banner, cover, description, name)
         };
	 BlockGame.style.cursor = 'pointer';
         BlockGame.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/blockgame_banner.png"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/blockgame_cover.png"
           description = "I make this because I was bored like half of the games on this site. Click on a block for them all to dissapear and all rows and columns will move down and over";
           name = "Block Merge"
           game_url = "Projects/BlockMerge/index.html"
           set_properties(banner, cover, description, name)
         };
	 suduko.style.cursor = 'pointer';
         suduko.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/sudoku_banner.jpeg"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/sudoku_cover.jpg"
           description = "Idk i made this in a day becauase I was bored it functions and I think its pretty good"
           name = "Sudoku!"
           game_url = "Projects/Suduko/index.html"
           set_properties(banner, cover, description, name)
         };    
         fs.style.cursor = 'pointer';
         fs.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/fs_banner.png"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/fs_cover.png"
           description = "Amazing Math's new exclusive fruit-ninja style game!"
           name = "Fruit Slicer!"
           game_url = "Projects/fruit_slicer/index.html"
           set_properties(banner, cover, description, name)
         };
          
         city_builder.style.cursor = 'pointer';
         city_builder.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/citybuilder_banner.png"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/citybuilder_cover.png"
           description = "An inprogress City Builder Game that is made in house by Astral, Please Remember that this game is in progress and is currently just a road renderer";
           name = "City Builder";
           game_url = "Projects/city_builder/index.html"
           set_properties(banner, cover, description, name)
         };
          
         ff.style.cursor = 'pointer';
         ff.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/ff_banner.png"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/ff_cover.png"
           description = "Amazing Math's new exclusive flappy-bird style game!"
           name = "Fighter Fun"
           game_url = "Projects/ff/index.html"
           set_properties(banner, cover, description, name)
         };
          
         hextris.style.cursor = 'pointer';
         hextris.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/hextris_banner.png"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/hextris_cover.png"
           description = "It's like tetris but weirder and more fun!"
           name = "Hextris!"
           game_url = "Projects/Hextris/index.html"
           set_properties(banner, cover, description, name)
         };
         game_2048.style.cursor = 'pointer';
         game_2048.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/2048_banner.jpeg"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/2048_cover.png"
           description = "You have to combine the blocks till you get to 2048 or run out of space!"
           name = "2048!"
           game_url = "Projects/2048/index.html"
           set_properties(banner, cover, description, name)
         };
         tetris.style.cursor = 'pointer';
         tetris.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/tetris_banner.jpeg"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/tetris_cover.jpeg"
           description = "its tetris what the fuck do you want from me"
           name = "Tetris!"
           game_url = "Projects/Tetris/index.html"
           set_properties(banner, cover, description, name)
         };
         dino.style.cursor = 'pointer';
         dino.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/dino_banner.png"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/dino_cover.png"
           description = "It's the chrome dino game, you have to jump and avoid cacti"
           name = "Dino Game!"
           game_url = "Projects/DinoGame/index.html"
           set_properties(banner, cover, description, name)
         };
         flappy.style.cursor = 'pointer';
         flappy.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/flappy_banner.jpg"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/flappy_cover.png"
           description = "Your a bird and you have to go in between two poles so that you don't hit them!"
           name = "Flappy Bird!"
           game_url = "Projects/FlappyBird/index.html"
           set_properties(banner, cover, description, name)
         };
         pacman.style.cursor = 'pointer';
         pacman.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/pacman_banner.png"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/pacman_cover.png"
           description = "Pretty sure everyone knows what pacman is"
           name = "Pacman!"
           game_url = "Projects/PacMan/index.html"
           set_properties(banner, cover, description, name)
         };
         racer.style.cursor = 'pointer';
         racer.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/jsracer_banner.webp"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/jsracer_cover.svg"
           description = "A simple fun racing game made in javascript"
           name = "Javascript Racer!"
           game_url = "Projects/JsRacer/index.html"
           set_properties(banner, cover, description, name)
         };
         clicker.style.cursor = 'pointer';
         clicker.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/clicker_banner.jpeg"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/clicker_cover.png"
           description = "You click the cookie to get more money, with more money you can buy autoclickers and other upgrades to get you cookies automatically without the need to click and you keep going!"
           name = "Cookie Clicker!"
           game_url = "Projects/Cookie Clicker/index.html"
           set_properties(banner, cover, description, name)
         };
         hit_target.style.cursor = 'pointer';
         hit_target.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/htt_banner.jpg"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/htt_cover.png"
           description = "You have to move your mouse to hit the target but as soon as your mouse goes over a block you die"
           name = "Hit the target"
           game_url = "Projects/HitTheTarget/index.html"
           set_properties(banner, cover, description, name)
         };
         lava.style.cursor = 'pointer';
         lava.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/dodgelava_banner.png"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/dodgelava_cover.png"
           description = "Jump to go up and avoid hitting the rising lava!"
           name = "Dodge the lava!"
           game_url = "Projects/DogeLava/index.html"
           set_properties(banner, cover, description, name)
         };
         space_company.style.cursor = 'pointer';
         space_company.onclick = function() {
           play.style.display = 'inline';
           main.style.display = 'none';
           banner = "https://astral-studios.github.io/AA_Dependencies/images/game_banners/sc_banner.jpeg"
           cover = "https://astral-studios.github.io/AA_Dependencies/images/game_covers/sc_cover.jpeg"
           description = "Idk I've never played this game"
           name = "Space Company!"
           game_url = "Projects/SpaceCompany/index.html"
           set_properties(banner, cover, description, name)
         };    
         back_arrow.style.cursor = 'pointer';
         back_arrow.onclick = function() {
           play.style.display = 'none';
           main.style.display = 'inline';
         };
         play_game.style.cursor = 'pointer';
         play_game.onclick = function() {
           window.location.replace(game_url)
         };
         users_select.style.cursor = 'pointer';
         users_select.onclick = function() {
           coming_soon.style.display = 'inline';
           chat_page.style.display = 'none';
           play.style.display = 'none';
           main.style.display = 'none';
            
           users_select.classList.add("page_selected");
           chat_select.classList.remove("page_selected");
           game_select.classList.remove("page_selected");
         };
         chat_select.style.cursor = 'pointer';
         chat_select.onclick = function() {
           coming_soon.style.display = 'none';
           chat_page.style.display = 'inline';
           play.style.display = 'none';
           main.style.display = 'none';
            
           users_select.classList.remove("page_selected");
           chat_select.classList.add("page_selected");
           game_select.classList.remove("page_selected");
         };
         game_select.style.cursor = 'pointer';
         game_select.onclick = function() {
           coming_soon.style.display = 'none';
           chat_page.style.display = 'none';
           play.style.display = 'none';
           main.style.display = 'inline';
            
           users_select.classList.remove("page_selected");
           chat_select.classList.remove("page_selected");
           game_select.classList.add("page_selected");
         };

         function set_properties(header_img, game_logo, description, game_name) {
           document.getElementById("banner_img").src = header_img;
           document.getElementById("game_cover").src = game_logo;
           document.getElementById("description").innerHTML = description
           document.getElementById("game_name").innerHTML = game_name
         }

	 function set_page(page) {
	   window.location.href = page;	 
	 }
