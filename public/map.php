<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="assets/css/map.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <!-- Firebase Reference -->

    <!-- Google map API-->
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7obRx7vf5Ef2XTKtUdhPMjd9SqNymQZ0&callback=initMap"
        type="text/javascript"></script>

    <title>Map Page</title>
</head>

<?php
require('Persistence.php');
$comment_post_ID = 1;
$db = new Persistence();
$comments = $db->get_comments($comment_post_ID);
$has_comments = (count($comments) > 0);
?>


<body id="Site">

    <!-- Nav Bar -->
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="index.html">Navbar 2</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="recommend.html">Add/Recommend</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="authentication.html">Login</a>
                </li>
            </ul>
        </div>
    </nav>
    <br>

    <!-- Search box -->
    <div id="search" class="float-right">
        <img src="img_girl.jpg" alt="Girl in a jacket">
        <input type="text" placeholder="Search..">
    </div>
    <br>
    <br>

    <!-- Div to display map -->

    <div class="col-lg-12" id="map">

    </div>

<section id="comments" class="body">

    <header>
        <h2>Comments</h2>
    </header>

        <input type="hidden" name="comment_post_ID" value="<?php echo($comment_post_ID); ?>" id="comment_post_ID" />

        <ol id="posts-list" class="hfeed<?php echo($has_comments?' has-comments':''); ?>">
            <li class="no-comments">Be the first to add a comment.</li>
            <?php
    foreach ($comments as $comment) {
      ?>
                <li>
                    <article id="comment_<?php echo($comment['id']); ?>" class="hentry">
                        <footer class="post-info">
                            <abbr class="published" title="<?php echo($comment['date']); ?>">
                                <?php echo( date('d F Y', strtotime($comment['date']) ) ); ?>
                            </abbr>

                            <address class="vcard author">
                                By
                                <a class="url fn" href="#">
                                    <?php echo($comment['comment_author']); ?>
                                </a>
                            </address>
                        </footer>

                        <div class="entry-content">
                            <p>
                                <?php echo($comment['comment']); ?>
                            </p>
                        </div>
                    </article>
                </li>
                <?php
    }
  ?>
        </ol>

        <div id="respond">

            <h3>Leave a Comment</h3>

            <form action="post_comment.php" method="post" id="commentform">

                <label for="comment_author" class="required">Your name</label>
                <input type="text" name="comment_author" id="comment_author" value="" tabindex="1" required="required">

                <label for="email" class="required">Your email:</label>
                <input type="email" name="email" id="email" value="" tabindex="2" required="required">

                <label for="comment" class="required">Your message</label>
                <textarea name="comment" id="comment" rows="10" tabindex="4" required="required"></textarea>

                <input type="hidden" name="comment_post_ID" value="1" id="comment_post_ID" />
                <input name="submit" type="submit" value="Submit comment" />
            </form>
        </div>
</section>


    <footer class="footer" align="center">
        <div class="container">
            <cite title="Source Title">Phone Number: 404-000-0000 | Website: website@website.com | Github | &copy; Copyright 2018 Poisoned Proxies</cite>
        </div>
    </footer>

</body>

<!--Connection to database-->
<?php
require('assets/pusher_config.php');
?>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
<script src="public/assets/js/upvote.js"></script>

<script type="text/javascript" src="assets/js/map.js"></script>
<script type="text/javascript" src="assets/js/upvote.js"></script>

</html>