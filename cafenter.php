#!/usr/local/bin/php
<?php
    session_save_path(__DIR__.'/sessions/');
    session_name('myWebpage');
    session_start();

    $incorr_submiss = false;

    if (isset($_POST['passwordSubmitted'])){
        validate($_POST['passwordSubmitted'], $incorr_submiss);
    }
    
    function validate($submiss, &$incorr_submiss){
        $file = fopen('h_password.txt','r') or die('Unable to find the hashed password.');

        $hashed_password = fgets($file);
        $hashed_password = trim($hashed_password);
        fclose($file);

        $submiss = trim($submiss);
        $hashed_submiss = hash('md2',$submiss);

        if ($hashed_password !== $hashed_submiss){
            # $_SESSION['loggedin'] = false;
            $incorr_submiss = true;
        } else {
            if (isset($_COOKIE["caffeine"])){
                # $_SESSION['loggedin'] = true;
                $incorr_submiss = false;
				# PUSH INFO TO GOOGLE SHEET
                header('Location: index.php');
                exit;
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>Aidan Seidle</title>
		<link rel="stylesheet" href="styles.css">
        <script src="getcaf.js" defer></script>
        <script src="cafenter.js" defer></script>
	</head>

    <body>
	<header class="header">
            <span><h1>Aidan Seidle</h1></span>
			<span>
				<nav>
					<a href="index.php">Home</a>
					<a href="code.html">Code</a>
					<a href="music.html">Music Stuff</a>
				</nav>
			</span>
		</header>

        <main>
            <section>
                <fieldset>
                    <form method="POST" action="cafenter.php">
                        <label for="caffeine">Caffeine Dose: </label>                    
                        <input type="text" id="caffeine" name="caffeine" 
                            <?php 
                                if(isset($_COOKIE['caffeine']) && $_COOKIE['caffeine']!=""){
                                    echo "value='{$_COOKIE['caffeine']}'";
                                }
                            ?>
                        ><br>
                        <label for="password">Password: </label>
                        <input type="password" id="password" name="passwordSubmitted">
                        <input type="submit" id="submitbutton" value="Submit">
                    </form>
                </fieldset>
                <p>
                <?php
                    if($incorr_submiss) {
                        echo 'Invalid password!';
                    }else{
                        echo '';
                    }
                ?>
                </p>
            </section>
        </main>

        <footer>
			<p>Welcome to a little slice of the internet where I get way too caffinated.</p>
        </footer>
    </body>
</html>
