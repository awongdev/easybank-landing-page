# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Dark Blue: hsl(233, 26%, 24%)
- Lime Green: hsl(136, 65%, 51%)
- Bright Cyan: hsl(192, 70%, 51%)

### Neutral

- Grayish Blue: hsl(233, 8%, 62%)
- Light Grayish Blue: hsl(220, 16%, 96%)
- Very Light Gray: hsl(0, 0%, 98%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Public Sans](https://fonts.google.com/specimen/Public+Sans)
- Weights: 300, 400, 700

<nav>
      <div
        class="container fixed left-2/4 z-50 flex translate-x-[-50%] items-center justify-between bg-white px-6 py-5 laptop:px-7 laptop:py-6 desktop:px-[10.313rem] desktop:py-8"
      >
        <a href="#"><img src="./images/logo.svg" alt="EasyBank logo" /></a>

        <ul
          class="absolute inset-x-6 top-[5.5rem] flex flex-col items-center gap-6 rounded bg-white py-8 text-center text-lg text-darkBlue laptop:relative laptop:inset-x-0 laptop:top-0 laptop:flex-row laptop:gap-[1.875rem] laptop:py-0 laptop:text-sm laptop:text-grayBlue"
        >
          <li><a href="#" class="hover:text-darkBlue">Home</a></li>
          <li><a href="#" class="hover:text-darkBlue">About</a></li>
          <li><a href="#" class="hover:text-darkBlue">Contact</a></li>
          <li><a href="#" class="hover:text-darkBlue">Blog</a></li>
          <li><a href="#" class="hover:text-darkBlue">Careers</a></li>
        </ul>

        <button class="hidden laptop:block">
          <a
            href="#"
            class="rounded-3xl bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] px-[2.125rem] py-[0.938rem] text-xs font-bold"
            >Request Invite</a
          >
        </button>
        <button class="laptop:hidden">
          <a href="#"
            ><img src="./images/icon-hamburger.svg" alt="Hamburger Menu"
          /></a>
        </button>
      </div>
      <div
        class="to-[rgba(45, 49, 77, 0.0001) 100%)] fixed inset-0 bg-gradient-to-b from-darkBlue"
      ></div>
    </nav>
