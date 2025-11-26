<template>
  <div class="wrapper">
    <div class="container">
      <div class="main">
        <MainNav />
          <div class="main__centerblock">
            <slot></slot>
          </div>
        <MainSidebar />
        </div>
      <PlayerBar />
    </div>
  </div>
</template>

\<script setup>

useHead({
  title: "Избранное | Skypro.Music",
  meta: [
    { name: "description", content: "Ваши любимые треки в одном месте" },
    { property: "og\:title", content: "Избранное | Skypro Music" },
    { property: "og\:site\_name", content: "Skypro Music" },
    { name: "twitter\:title", content: "Skypro Music — Избранное" },
  ],
});
</script>