# Proj2-Snake

> 本实验取自 [UCB-CS61C Proj1](https://cs61c.org)

## 前言

欢迎来到Proj2-Snake的项目，相信到这里的大家已经对C语言有了基本的了解，那么下面的这个项目则是对大家的提升与挑战。

请确保你已经掌握下面知识点,~~虽然不掌握也没事，边做边学就好~~

### 涉及知识点

- 掌握基本C语言语法
- 掌握内存管理相关内容(如何使用**malloc、realloc**等内存管理函数)
- 掌握**指针、结构体**的使用
- 掌握基本的**文件输入输出**
- 掌握基本的终端使用方法，至少能够运行文档里提供的指令
- 掌握**cgdb**的使用，学会如何调试程序
- 掌握**valgrind**的使用，能够对内存泄漏进行排查

## 概念概述

### 蛇

贪吃蛇游戏可以用角色网格来表示。网格包含墙壁、水果和一条或多条蛇。一个游戏的例子如下所示：

```txt
##############
#            #
#    dv      #
#     v   #  #
#     v   #  #
#   s >>D #  #
#   v     #  #
# *A<  *  #  #
#            #
##############
```

网格包含以下特殊字符：

- `#`表示一堵墙。
- （空格字符）表示空格。
- `*`表示水果。
- `wasd`表示蛇的尾巴。
- `^<v>`表示蛇的身体。
- `WASD`表示蛇的头。
- `x`表示已经死亡的蛇的头。

蛇的每个字符都会告诉你蛇当前的前进方向：

- w 、 W 或 ^ 表示向上
- a 、 A 或 < 表示左侧
- s 、 S 或 v 表示向下
- d 、 D 或 > 表示右

在每个单位时间，每条蛇都按照以下规则移动：

- 每条蛇都向其头部方向移动一步。
- 如果头部撞到蛇的身体或墙壁，蛇就会死亡并停止移动。当蛇死亡时，头部会被替换为 x 。
- 如果蛇头碰到水果，蛇就会吃掉水果，长度会增加 1 个单位。每次消耗水果时，棋盘上都会生成一个新水果。

在上面的示例中，经过一个时间步长后，游戏板将如下所示：

```txt
##############
#         *  #
#     s      #
#     v   #  #
#     v   #  #
#   s >>>D#  #
#   v     #  #
# A<<  *  #  #
#            #
##############
```

再过一个时间步长后，游戏板将如下所示：

```txt
##############
#         *  #
#     s      #
#     v   #  #
#     v   #  #
#     >>>x#  #
#   s     #  #
#A<<<  *  #  #
#            #
##############
```

注意：蛇至少有三个单位长。

### 蛇的编号

假如存在多条蛇，那我们将按照以下规则进行编号：

- 按照尾巴在文件中出现的顺序（从上到下，然后从左到右）。

例如，考虑下面有四条蛇的棋盘：

```txt
#############
#  s  d>>D  #
#  v   A<a  #
#  S    W   #
#       ^   #
#       w   #
#############
```

蛇 0 是有尾巴 s 的蛇，蛇 1 有尾巴 d ，蛇 2 有尾巴 a ，蛇 3 有尾巴 w .

一旦蛇从初始位置开始编号，蛇的编号在整个游戏过程中就不会改变。

### 游戏板

游戏板是一个由字符 `#` 组成的网格，不一定是矩形的。

下面是一个非矩形游戏板的示例：

```txt
##############
#            #######
#####             ##
#   #             ##
#####             ######
#                 ##   #
#                 ######
#                 ##
#                  #
#      #####       #
########   #########
```

请注意，每行可以有不同数量的字符，但将以墙开始和结束 ( # )。你还可以假设棋盘是一个封闭的空间，因此蛇不能向任何方向无限远地移动。

### `game_state_t` 结构体

贪吃蛇游戏存储在内存中的 `game_state_t` 结构中，该结构在 `state.h` 中定义。该结构体包含以下字段：

- `unsigned int num_rows`：游戏板的行数。
- `char** board`：内存中的游戏板。 `board` 数组的每个元素都是一个 `char*` 指针，指向包含地图行的字符数组。
- `unsigned int num_snakes`：棋盘上的蛇的数量。
- `snake_t* snakes`：`snake_t` 结构的数组。

### `snake_t` 结构体

同样在 `state.h` 中定义，每个 `snake_t` 结构体包含以下字段：

- `unsigned int tail_row`：蛇尾所在的行。
- `unsigned int tail_col`：蛇尾所在的列。
- `unsigned int head_row`：蛇头所在的行。
- `unsigned int head_col`：蛇头所在的列。
- `bool live`：如果蛇还活着为`true`，如果蛇死了为`false`。

**请不要修改提供的结构定义。**

 你只需要修改此项目中的 `state.c`、`snake.c` 和 `custom_tests.c` 。

## 任务 1：`create_default_state`

在 `state.c` 中实现 `create_default_state` 函数。此函数应在内存中创建一个具有以下起始状态（你可以硬编码）的默认贪吃蛇游戏，并返回指向新创建的 `game_state_t` 结构的指针。

```txt
####################
#                  #
# d>D    *         #
#                  #
#                  #
#                  #
#                  #
#                  #
#                  #
#                  #
#                  #
#                  #
#                  #
#                  #
#                  #
#                  #
#                  #
####################
```

| `create_default_state`| | |
|---|---|---|
|**参数**|None|   |
|**返回值**|`game_state_t *`|指向新创建的 `game_state_t` 结构的指针|

### 提示

- 游戏板有 18 行，每行有 20 列。水果位于第 2 行第 9 列（零索引）。尾部位于第 2 行第 2 列，头部位于第 2 行第 4 列。
- 你应该将新游戏存储在内存的哪一部分（代码、静态、堆栈、堆）？
- `strcpy` 可能会有所帮助。

### 测试和调试

你可以运行 `make run-unit-tests` 来检查每个任务的实现。**但请注意，单元测试并不全面，通过它们并不能保证你的实现完全正确。** 但它们确实能帮助你排查显著的错误。

如果你的实现无法正常工作，那么就该开始调试了。你可以在代码中添加 `printf` 语句以在代码执行期间打印出变量，然后再次运行 `make run-unit-tests` 以查看打印语句的输出。

另外，你可以使用 `make debug-unit-tests` 来启动CGDB。在 CGDB 中，你可以在自己的代码中设置断点（提示：有关如何在不同文件中设置断点的信息，请参阅 [GDB Manual](https://cgdb.github.io/docs/cgdb.html#Invocation) 。）然后输入 `run` 或 `r` 启动程序，它将在断点处暂停。

提示：如果你看到 `Segmentation fault (core dumped)`，这意味着你的程序崩溃了。你可以尝试启动 CGDB， 并在没有断点的情况下开始程序`run`，然后键入 `backtrace`或 `bt` 查看程序的哪一行代码崩溃。

## 任务 2：`free_state`

在 `state.c` 中实现 `free_state` 函数。此函数应释放为给定状态分配的所有内存，包括所有 `snake` 结构和所有 `map->board` 内容。

|`free_state`|   |   |
|---|---|---|
|**参数**|`game_state_t* state`|指向要释放的`game_state_t`结构的指针|
|**返回值**|None|   |

### 测试和调试

要测试我们是否正确释放游戏状态的内存，请运行 `make valgrind-test-free-state` 以检查内存泄漏。如果没有泄漏任何内容，则你已通过此任务的单元测试。

## 任务 3：`print_board`

在 `state.c` 中实现 `print_board` 函数。此函数应将给定的游戏板打印到给定的文件指针。

|`print_board`|  |  |
|---|---|---|
|**参数**|`game_state_t* state`|指向要打印的 `game_state_t` 结构的指针|
|**参数**|`FILE* fp`|指向应将游戏板打印到的文件对象的指针|
|**返回值**|None |   |   |

### 提示

- `fprintf` 函数可以将字符和/或字符串打印到给定的文件指针。

### 测试和调试

运行 `make run-unit-tests` 和 `make debug-unit-tests` 进行测试和调试，就像以前一样。

如果你的函数执行成功（没有段错误或崩溃）但没有打印正确的输出，则你打印的游戏板将位于 `unit-test-out.snk` 中，你可以打开它来检查你的错误。正确打印的游戏板应与任务 1 中的默认游戏板匹配。

## 任务 4：`update_state`

在 `state.c` 中实现 `update_state` 函数。此函数应根据游戏规则将蛇移动一步。

我们会提供一些辅助函数来帮助你实现此函数，但你同样可以尝试全部自己实现。

### 任务 4.1：帮助程序

我们提供了你可以实现的以下辅助函数定义。这些功能完全独立于任何游戏板或贪吃蛇；它们只接受单个字符并输出有关该字符的一些信息。

- `bool is_tail(char c)`：如果 `c` 是蛇尾巴的一部分，则返回 `true`。蛇的尾巴由以下字符组成： `wasd` 。否则返回 `false`。
- `bool is_head(char c)`：如果 `c` 是蛇头的一部分，则返回 `true`。蛇的头部由以下字符组成： `WASDx` 。否则返回 `false`。
- `bool is_snake(char c)`：如果 `c` 是蛇的一部分，则返回 `true`。蛇由以下字符组成：`wasd^<v>WASDx` 。否则返回 `false`。
- `char body_to_tail(char c)`：将蛇身体中的字符 ( `^<v>` ) 转换为表示蛇尾巴的匹配字符 ( `wasd` )。对于不是蛇身体的角色，输出可能是未定义的。
- `char head_to_body(char c)`：将蛇头部的字符 ( `WASD` ) 转换为代表蛇身体的匹配字符 ( `^<v>` )。对于不是蛇头的字符，输出可能是未定义的。
- `unsigned int get_next_row(unsigned int cur_row, char c)`：如果 `c` 是 `v` 或 `s` 或 `S` ，则返回 `cur_row + 1` 。如果 `c` 是 `^` 或 `w` 或 `W` ，则返回 `cur_row - 1` 。否则返回 `cur_row`。
- `unsigned int get_next_col(unsigned int cur_col, char c)`：如果 `c` 是 `>` 或 `d` 或 `D` ，则返回 `cur_col + 1` 。如果 `c` 是 `<` 或 `a` 或 `A` ，则返回 `cur_col - 1` 。否则返回 `cur_col` 。

我们没有为这些辅助函数提供单元测试，因此你必须在 `custom_tests.c` 中编写自己的测试，以确保它们按预期工作。确保这些测试全面测试你的辅助函数。

编写单元测试时，如果测试失败，测试函数应返回 `false` ；如果测试通过，则测试函数应返回 `true` 。你可以使用 `printf` 打印出调试语句。 `asserts.h` 中的一些断言辅助函数可能有用。

一旦你编写了自己的单元测试，就可以使用 `make run-custom-tests` 和 `make debug-custom-tests` 运行它们。

### 任务 4.2：`next_square`

在 `state.c` 中实现 `next_square` 辅助函数。此函数返回给定蛇**正在移动到的单元格**中的字符。此函数不应修改内存中存储的游戏中的任何内容。

|`next_square`|   |   |
|---|---|---|
|**参数**|`game_state_t* state`|指向要分析`game_state_t`的结构的指针|
|**参数**|`int snum`|待分析蛇的索引|
|**返回值**|`char`|给定蛇正在进入的单元格中的字符|

例如，请考虑以下游戏板：

```txt
##############
#            #
#            #
#            #
#   d>D*     #
#            #
#       s    #
#       v    #
#       S    #
##############
```

假设 `state` 是指向此游戏状态的指针，则 `next_square(state, 0)` 应该返回 `*`，因为蛇 0 的头正在移动到具有 * 在其中。同样，对于蛇 1， `next_square(state, 1)` 应该返回 # 。

你之前编写的辅助函数可能对此函数（以及此任务的其余部分）有帮助。另外，请查看 `get_board_at` 和 `set_board_at` ，它们是我们为你编写的辅助函数。

使用 `make run-unit-tests` 和 `make debug-unit-tests` 运行提供的单元测试。你还可以在 cgdb 中调试时使用 `p print_board(state, stdout)` 打印整个游戏板。

### 任务 4.3：`update_head`

在 `state.c` 中实现 `update_head` 函数。此函数将更新蛇的头部。

请记住，你需要更新游戏板和 `snake_t` 结构中的头部。在游戏板上，添加一个蛇正在移动的字符。在 `snake_t` 结构体中，更新头部的行和列。

|`update_head`|   |   |
|---|---|---|
|**参数**|`game_state_t* state`|指向要更新的 `game_state_t` 结构的指针|
|**参数**|`int snum`|要更新的蛇的索引|
|**返回值**|None|   |

例如，请考虑以下游戏板：

```txt
##############
#   d>D      #
#        *   #
#        W   #
#        ^   #
#        ^   #
#        w   #
#            #
#            #
##############
```

假设 `state` 是指向该游戏状态的指针，那么 `update_head(state, 0)` 将移动蛇0的头部，而其他所有蛇保持不变。在蛇 0 对应的 `snake_t` 结构体中， `head_col` 值应从 `6` 更新为 `7`， `head_row` 值应保持为 `1` 不变。游戏板将如下所示：

```txt
##############
#   d>>D     #
#        *   #
#        W   #
#        ^   #
#        ^   #
#        w   #
#            #
#            #
##############
```

请注意，该函数在移动头部时会忽略食物、墙壁和蛇身。

使用 `make run-unit-tests` 和 `make debug-unit-tests` 运行提供的单元测试。你还可以在 cgdb 中调试时使用 `p print_board(state, stdout)` 打印整个游戏板。

### 任务 4.4：`update_tail`

在 `state.c` 中实现 `update_tail` 函数。此函数将更新蛇的尾巴。

请记住，你需要更新游戏板和 `snake_t` 结构中的尾部。在游戏板上，清空当前的尾巴，并将新的尾巴从身体字符（ `^<v>` ）更改为尾部字符（ `wasd` ）。在 `snake_t` 结构体中，更新尾部的行和列。

|`update_tail`|   |   |
|---|---|---|
|**参数**|`game_state_t* state`|指向要更新的 `game_state_t` 结构的指针|
|**参数**|`int snum`|要更新的蛇的索引|
|**返回值**|None|   |

例如，请考虑以下游戏板：

```txt
##############
#   d>D      #
#        *   #
#        W   #
#        ^   #
#        ^   #
#        w   #
#            #
#            #
##############
```

假设 `state` 是指向该游戏状态的指针，那么 `update_tail(state, 1)` 将移动蛇1的尾巴，而其他所有蛇保持不变。在蛇 1 对应的 `snake_t` 结构体中， `tail_row` 值应从 `6` 更新为 `5`， `tail_col` 值应保持在 `9` 不变。游戏板将如下所示：

```txt
##############
#   d>D      #
#        *   #
#        W   #
#        ^   #
#        w   #
#            #
#            #
#            #
##############
```

使用 `make run-unit-tests` 和 `make debug-unit-tests` 运行提供的单元测试。你还可以在 cgdb 中调试时使用 `p print_board(state, stdout)` 打印整个游戏板。

### 任务 4.5：`update_state`

使用你实现的辅助函数，在 `state.c` 中实现 `update_state`。

提醒一下，移动蛇的规则如下：

- 每条蛇都向其头部方向移动一步。
- 如果头部撞到蛇的身体或墙壁，蛇就会死亡并停止移动。当蛇死亡时，头部会被替换为 x 。
- 如果蛇头遇到水果，蛇就会吃掉水果，长度会增加 1 个单位。 （可以通过更新头部而不更新尾部来实现增长1个单位。）每次消耗水果，棋盘上都会生成一个新的水果。

|`update_state`|   |   |
|---|---|---|
|**参数**|`game_state_t* state`|指向要更新的 `game_state_t` 结构的指针|
|**参数**|`int (*add_food)(game_state_t* state)`|指向将向棋盘添加水果的函数的指针|
|**返回值**|None|   |

`int (*add_food)(game_state_t* state)` 参数是一个函数指针，这意味着 `add_food` 是指向内存代码段的指针。 `add_food` 指向的代码是一个函数，它接受 `game_state_t* state` 作为参数并返回 `int` 。你可以使用 `add_food(x)` 调用此函数，并将 `x` 替换为你的游戏板参数，以将水果添加到游戏板上。

**注意：我们已经提供了添加食物的函数，你可以在`snake_utils.c`中查看具体实现。**

使用 `make run-unit-tests` 和 `make debug-unit-tests` 运行提供的单元测试。你还可以在 cgdb 中调试时使用 `p print_board(state, stdout)` 打印整个游戏板。

## 任务 5：`load_board`

在 `state.c` 中实现 `load_board` 函数。此函数会将游戏板从流 ( `FILE *` ) 读取到内存中。你的 `load_board` 实现必须支持从 `stdin` 和任何其他流读取，因此请不要使用任何不支持 `stdin` 的内容，例如seeking, rewinding, 或 reopening。

请记住，游戏板的每一行可能有不同的列数。你的实现应该具有内存效率，并且分配的内存不应超过存储游戏板所需的内存。例如，如果一行的长度为 3 个字符，则不应为该行分配 100 字节的空间。我们强烈建议不要使用 `getline` ，因为它内存效率不高。

提示： `realloc` 可能对此任务有帮助。

任务 5 和 6 组合起来将在内存中创建一个 `game_state_t` 结构，并设置其所有字段。在此任务中，请将 `num_snakes` 设置为 `0` 并将 `snakes` 数组设置为 `NULL` ，因为这些将在任务 6 中初始化。

|`load_board`|   |   |
|---|---|---|
|**参数**|`FILE* file`|可以从中读取游戏板的文件指针|
|**返回值**|`game_state_t *`|指向新创建的 `game_state_t` 结构的指针。 如果有任何错误则返回`NULL`。|

使用 `make run-unit-tests` 和 `make debug-unit-tests` 运行提供的单元测试（并不全面）。你还可以在 cgdb 中调试时使用 `p print_board(state, stdout)` 打印整个游戏板。

## 任务 6：`initialize_snakes`

在 `state.c` 中实现 `initialize_snakes` 函数。此函数接受游戏板并创建 `snake_t` 结构数组。

你可以随意实现此函数，但如果你愿意，你可以通过实现我们提供的辅助函数来完成此任务。

### 任务 6.1：`find_head`

在 `state.c` 中实现 `find_head` 函数。给定一个已知尾部行和列的 `snake_t` 结构体，该函数将跟踪整个棋盘以找到头行和列，并填充结构体中的头行和列。

|`find_head`|   |   |
|---|---|---|
|**参数**|`game_state_t* state`|指向要分析的 `game_state_t` 结构体的指针|
|**参数**|`int snum`|待分析蛇的索引|
|**返回值**|None|   |

例如，请考虑以下游戏板：

```txt
##############
#            #
#        *   #
#            #
#   d>v      #
#     v      #
#  W  v      #
#  ^<<<      #
#            #
##############
```

假设 `state` 是指向该游戏状态的指针，那么 `find_head(state, 0)` 将填充蛇 0结构体的 `head_row` 和 `head_col` 字段分别为 `6` 和 `3`。

使用 `make run-unit-tests` 和 `make debug-unit-tests` 运行提供的单元测试。你还可以在 cgdb 中调试时使用 `p print_board(state, stdout)` 打印整个游戏板。

### 任务 6.2：`initialize_snakes`

使用 `find_head` ，实现 `state.c` 中的 `initialize_snakes` 函数。你可以假设传递到此函数的游戏板是调用 `load_board` 的结果，但你不能假设已定义 `snakes` 数组。换句话说，与棋盘相关的内容已经填写完毕，你只需填写 `num_snakes` 并创建 `snakes` 数组即可。

你可以假设棋盘上的所有蛇一开始都是活着的。

|`initialize_snakes`|   |   |
|---|---|---|
|**参数**|`game_state_t* state`|指向要填充的 `game_state_t` 结构体的指针|
|**返回值**|`game_state_t* state`|指向 `game_state_t` 结构体的指针，其中填充了字段。这可以与传入的结构体相同（你可以就地修改该结构体）。|

使用 `make run-unit-tests` 和 `make debug-unit-tests` 运行提供的单元测试。你还可以在 cgdb 中调试时使用 `p print_board(state, stdout)` 打印整个游戏板。

## 任务 7：`main`

使用你在之前所有任务中实现的函数，填写 `snake.c` 中的空白。每次运行 `snake.c` 程序时，游戏板都会更新一个时间步长。

要测试你的完整实现，请运行 `make run-integration-tests`。

要调试你的实现，请运行 `cgdb --args ./snake -i tests/TESTNAME-in.snk -o tests/TESTNAME-out.snk` 。要检查内存泄漏或越界读/写，你可以运行 `valgrind ./snake -i tests/TESTNAME-in.snk -o tests/TESTNAME-out.snk` 。将 `TESTNAME` 替换为 tests 文件夹中的测试名称之一：

- `01-simple`
- `02-direction`
- `03-tail`
- `04-food`
- `05-wall`
- `06-small`
- `07-medium`
- `08-multisnake`
- `09-everything`
- `10-filled`
- `11-manyclose`
- `12-corner`
- `13-sus`
- `14-orochi`
- `15-hydra`
- `16-huge`
- `17-wide`
- `18-tall`
- `19-101-127`
- `20-long-line`
- `21-bigL`

同样，你可以通过运行 `./snake --stdin -o tests/TESTNAME-out.snk < tests/TESTNAME-in.snk` 然后运行 ​​ `diff tests/TESTNAME-ref.snk tests/TESTNAME-out.snk` 来测试从 `stdin` 加载。

如果你需要调试，请运行 `cgdb ./snake` ，然后运行 ​​ `set args --stdin -o tests/TESTNAME-out.snk < tests/TESTNAME-in.snk` 或运行 `valgrind ./snake --stdin -o tests/TESTNAME-out.snk < tests/TESTNAME-in.snk` 。

注意：此行为未使用 `make run-unit-tests` 或 `make run-integration-tests` 进行显式测试。

你还可以运行 `make run-nonexistent-input-file-test` 以确保你的程序在输入文件不存在时正确退出并返回错误代码 `-1`。

## Just For Fun：玩蛇

现在你可以使用 `make interactive-snake` ，然后运行 `./interactive-snake` 来玩游戏。使用 wasd 键来控制你的蛇！

要加快或减慢游戏速度，你可以运行 `./interactive-snake -d 0.5` （将 `0.5` 替换为时间步之间的秒数）。在游戏过程中，你还可以按 `]` 移动得更快，按 `[` 移动得更慢。
