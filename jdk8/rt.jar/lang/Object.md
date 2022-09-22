## Object

### static code block

1. 调用方法registerNatives();

### method

1. private static native void registerNatives(); 
    - 私有静态native方法，无返回值。

2. public final native Class<?> getClass();
    - public的final的native方法。
    - 返回Class<?>对象。

3. public native int hashCode();
   - public的native方法。
   - 返回int。

4. public boolean equals(Object obj);
   - public的非静态方法。
   - 返回boolean。
   - 使用调用对象和参数obj用“==”比较，比较的是地址。（若没有重写equals方法，则比较的就是地址）

5. protected native Object clone() throws CloneNotSupportedException;
   - protected的native非静态方法。
   - 返回Object对象。

6. public String toString();
   - public的非静态方法。
   - 返回String对象。

7. public final native void notify();
   - public的final方法，native方法。

8. public final native void notifyAll();
   - public的final方法，native方法。

9. public final native void wait(long timeout) throws InterruptedException;
   - public的final方法，native方法。

10. public final void wait(long timeout, int nanos) throws InterruptedException;
    - public的final方法。
    - 无返回值。
    - timeout不能小于0。
    - nanos的范围在[0, 999999]之间。
    - 当nanos大于零时，timeout++。
    - 调用wait(long timeout)方法。

11. public final void wait() throws InterruptedException;
    - public的final方法。
    - 无返回值。
    - 会调用wait(0)方法。

12. protected void finalize() throws Throwable;
    - protected的方法。
    - 无返回值。
    - 空方法。
